const runCommand="pFacesCli run";
var runProperties = {
  name: runCommand,
  description: runCommand,
  parameters: [{
    name: "project_name",
    type: {name: "file", file: true, directory: true, exist: true, multiple: true, content: true, recurse: true},
    description: "project target"
  },
  {
    name: "hwc",
    type: "string",
    description: "hwc target"
  },
  {
    name: "device",
    type: "string",
    description: "device target"
  },
  {
    name: "kernel_name_dir",
    type: "string",
    description: "hwc target"
  },
  {
    name: "kernel_config_path",
    type: "string",
    description: "",
    defaultValue: ""
  }],
  returnType: "string"
};


var runImpl = {
  callback: function(args, context) {
    var hwcStr=args.hwc;
    var deviceName=args.device;
    var hwc=parseInt(hwcStr.charAt(hwcStr.length-1));
    var project = args.project_name;
    var kernel=args.kernel_name_dir.split("@");
    var kernel_name="";
    var kernel_dir=".";
    var kernel_config_path=args.kernel_config_path;
    if(kernel.length>1){
        kernel_name=kernel[0];
        kernel_dir=kernel[1];}
        else{kernel_name=kernel[0];}
    console.log(kernel);
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
                         var optionsKeys=[keys["PFACES_AGENT_USER_DICT_PROJECT_RUN_PROJECT_name"],keys["PFACES_AGENT_USER_DICT_PROJECT_RUN_DEVICE_id"],keys["PFACES_AGENT_USER_DICT_PROJECT_RUN_KERNEL_name"]
                         ,keys["PFACES_AGENT_USER_DICT_PROJECT_RUN_KERNEL_dir"],keys["PFACES_AGENT_USER_DICT_PROJECT_RUN_KERNEL_config_path"]]
                         var optionsValues=[projectname,deviceName,kernel_name,kernel_dir,kernel_config_path];
                         var optionBody=toJson(optionsKeys,optionsValues);
                         var request=userDictJson(keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_RUN"],"submitted",optionBody,d.toLocaleString(),"","");
                         var runResponse=pfacesSetValue(request,getLoginURL(response,urls[hwc-1]));
                         runResponse.then(function(res){
                         console.log(res);
                         result.resolve(JSON.parse(res)[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_RUN"]]);})
                       }}
                    else{
                       result="Not connected to the HWC";
                    }
                    return result;
             });
  }
};
