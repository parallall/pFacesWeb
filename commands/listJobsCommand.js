const listJobsCommand="pFacesCli list-jobs";
var listJobsProperties = {
  name: listJobsCommand,
  description: "List all jobs",
  parameters: [{
            name: "hwc",
            type: "string",
            description: "Hardware configuration target"
        }],
  returnType: "string"
};
var listJobsImpl = {
  callback: function(args, context) {
    var d=new Date();
    var hwcStr=args.hwc;
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
                           console.log(jobs);
                           if(JSON.parse(jobs)[keys["PFACES_AGENT_USER_DICT_JOBS_LIST"]] == "no-jobs"){
                             result.resolve("No jobs.");
                           }
                           var jobs_list=JSON.parse(JSON.parse(jobs)[keys["PFACES_AGENT_USER_DICT_JOBS_LIST"]]);
                           var jobsTable="JOB ID            JOB STATUS            JOB CMD\n";
                           console.log(jobs_list[0]);
                           for(i=0;i<jobs_list.length;i++){
                             jobsTable+=jobs_list[i][keys["PFACES_AGENT_USER_DICT_JOBS_LIST_JOB_ID_JSON_KEY"]]+"                 "+
                             jobs_list[i][keys["PFACES_AGENT_USER_DICT_JOBS_LIST_JOB_STATUS_JSON_KEY"]]+"                    "+
                             jobs_list[i][keys["PFACES_AGENT_USER_DICT_JOBS_LIST_JOB_CMD_JSON_KEY"]]+"\n";
                           }
                           result.resolve(jobsTable);
                          })
                       }}
                    else{
                       result.resolve("Not connected to the HWC");
                    }
                    return result;
             });

  }
};
