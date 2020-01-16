const uploadCommand="pFacesCli upload";
var uploadProperties = {
  name: uploadCommand,
  description: "Upload the project to the server",
  parameters: [{
    name: "files",
    type: {name: "file", file: true, directory: true, exist: true, multiple: true, content: true, recurse: true},
    description: "Upload the project to the server"
  },
  {
            name: "hwc",
            type: "string",
            description: "Hardware configuration target"
  }],
    returnType: "string"
};

var uploadImpl = {
  callback: function(args, context) {
    var zip = new JSZip();
    var files = args.files;
    var projectname="";
    console.log(context);
    if(files["0"]["path"]=="."){
       projectname=context["cwd"].substring((context["cwd"].substring(0,context["cwd"].length-1)).lastIndexOf('/')+1,context["cwd"].length-1);
    }
    else{
      projectname=files["0"]["path"].substring((files["0"]["path"].substring(0,files["0"]["path"].length-1)).lastIndexOf('/')+1,files["0"]["path"].length-1);
      console.log(projectname);
    }
    files.forEach(function(file) {
        console.log(file);
        var segments = file.path.split("/");
        var current = zip;
        var dirSegmentCount = segments.length - (file.isDirectory ? 0 : 1);
        for (var i = 0; i < dirSegmentCount; i++) {
            var segment = segments[i];
            if (segment !== ".") {
                current = current.folder(segment);
            }
        }
        if (!file.isDirectory) {
            current.file(segments[dirSegmentCount], file.blob);
        }
    });
    var d=new Date();
    var hwcStr=args.hwc;
    var hwc=parseInt(hwcStr.charAt(hwcStr.length-1));
    var project=zip.generate({type:"base64"});
    var response=pfacesGetAccessResponse(userID,urls[hwc-1]);
    return   response.then(function(response){
                    var result= new orion.Deferred();
                    console.log(response);
                    if(!isObject(response)){
                       var permission=checkPermission(response)
                       if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"]){
                         console.log(getLoginURL(response,urls[hwc-1]));
                         var optionsKeys=[keys["PFACES_AGENT_USER_DICT_PROJECT_UPLOAD_PROJECT_name"]]
                         var optionsValues=[projectname];
                         var optionBody=toJson(optionsKeys,optionsValues);
                         var request=userDictJson(keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_UPLOAD"],"submitted",optionBody,d.toLocaleString(),"",project);
                         var uploadResponse=pfacesSetValue(request,getLoginURL(response,urls[hwc-1]));
                         uploadResponse.then(function(res){
                         result.resolve(JSON.parse(res)[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_UPLOAD"]]);})
                       }}
                    else{
                       result="Not connected to the HWC";
                    }
                    return result;
             });

  }
};
