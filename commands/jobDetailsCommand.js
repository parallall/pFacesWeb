const jobDetailsCommand="pFacesCli job-details";
var jobDetailsProperties = {
  name: jobDetailsCommand,
  description: "Show Job Detail",
  parameters: [{
            name: "hwc",
            type: "string",
            description: "Hardware configuration target"
          },
        {
            name :"jobID",
            type: "string",

        }],
  returnType: "string"
};
var jobDetailsImpl = {
  callback: function(args, context) {
    var d=new Date();
    var hwcStr=args.hwc;
    var jobID=args.jobID;
    var hwc=parseInt(hwcStr.charAt(hwcStr.length-1));
    var response=pfacesGetAccessResponse(userID,urls[hwc-1]);
    return   response.then(function(response){
                    var result= new orion.Deferred();;
                    console.log(response);
                    if(!isObject(response)){
                       var permission=checkPermission(response)
                       if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"]){
                         console.log(getLoginURL(response,urls[hwc-1]));
                         var jobs=pfacesGetValue([keys["PFACES_AGENT_USER_DICT_JOBS_LIST"]],getLoginURL(response,urls[hwc-1]));
                         jobs.then(function(jobs){
                           var jobs_list=JSON.parse(JSON.parse(jobs)[keys["PFACES_AGENT_USER_DICT_JOBS_LIST"]]);
                           var jobDetail="JOB STATUS: ";
                           console.log(jobs_list[0]);
                           for(i=0;i<jobs_list.length;i++){
                               if(jobs_list[i][keys["PFACES_AGENT_USER_DICT_JOBS_LIST_JOB_ID_JSON_KEY"]]==jobID){
                                 jobDetail+=jobs_list[i][keys["PFACES_AGENT_USER_DICT_JOBS_LIST_JOB_STATUS_JSON_KEY"]]+"\n";
                                 jobDetail+="JOB DETAILS:  "+"\n";
                                 jobDetail+=jobs_list[i][keys["PFACES_AGENT_USER_DICT_JOBS_LIST_JOB_DETAILS_JSON_KEY"]];
                               }
                           }
                           result.resolve(jobDetail);})
                       }}
                    else{
                       result.resolve("Not connected to the HWC");
                    }
                    return result;
             });

  }
};
