const pFacesProjectsCommand="pFacesCli list-projects";
var pFacesProjectsCommandProperties = {
  name: pFacesProjectsCommand,
  description: "pFacesCli list-projects",
  parameters: [{
            name: "hwc",
            type: "string",
            description: "Hardware configuration target"
        }],
  returnType: "string"

};
var pFacesProjectsCommandImpl = {
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
                         var projects=pfacesGetValue([keys["PFACES_AGENT_USER_DICT_PROJECT_LIST"]],getLoginURL(response,urls[hwc-1]));
                         projects.then(function(projects){
                           var projects_list=JSON.parse(projects)[keys["PFACES_AGENT_USER_DICT_PROJECT_LIST"]];
                           projects_list=projects_list.split(",");
                           var list="";
                           for(i=0;i<projects_list.length;i++){
                                list+=projects_list[i]+"\n";
                           }
                           result.resolve(list);})
                       }}
                    else{
                       result.resolve("Not connected to the HWC");
                    }
                    return result;
             });
             ;}
};
