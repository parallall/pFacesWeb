const compileCommand="pFacesCli compile";
var compileProperties = {
  name: compileCommand,
  description: "Compile project with pFaces",
  parameters: [{
    name: "project",
    type: "string",
    description: "Compile project with pFaces"
  }],
  returnType: "string"
};
var compileImpl = {
  callback: function(args, context) {
    var hwcStr=args.hwc;
    var deviceName=args.device;
    var hwc=parseInt(hwcStr.charAt(hwcStr.length-1));
    var project = args.project_name;
    var projectname="";
    console.log(context);
    if(project["0"]["path"]=="."){
       projectname=context["cwd"].substring((context["cwd"].substring(0,context["cwd"].length-1)).lastIndexOf('/')+1,context["cwd"].length-1);
    }
    else{
      projectname=project["0"]["path"].substring((project["0"]["path"].substring(0,project["0"]["path"].length-1)).lastIndexOf('/')+1,project["0"]["path"].length-1);
      console.log(projectname);
    }
    var d=new Date();
    var response=pfacesGetAccessResponse(userID,urls[hwc-1]);
    return   response.then(function(response){
                    var result= new orion.Deferred();
                    console.log(response);
                    if(!isObject(response)){
                       var permission=checkPermission(response)
                       if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"]){
                         console.log(getLoginURL(response,urls[hwc-1]));
                         var optionsKeys=[keys["PFACES_AGENT_USER_DICT_PROJECT_RUN_PROJECT_name"]];
                         var optionsValues=[projectname];
                         var optionBody=toJson(optionsKeys,optionsValues);
                         var request=userDictJson(keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_COMPILE"],"submitted",optionBody,d.toLocaleString(),"","");
                         var runResponse=pfacesSetValue(request,getLoginURL(response,urls[hwc-1]));
                         runResponse.then(function(res){
                         console.log(res);
                         result.resolve(JSON.parse(res)[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_COMPILE"]]);})
                       }}
                    else{
                       result="Not connected to the HWC";
                    }
                    return result;
             });
  }
};
