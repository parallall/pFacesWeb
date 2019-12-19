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
                    var result="";
                    console.log(response);
                    if(!isObject(response)){
                       var permission=checkPermission(response)
                       if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"]){
                         console.log(getLoginURL(response,urls[hwc-1]));
                         var optionsKeys=[keys["PFACES_AGENT_USER_DICT_PROJECT_UPLOAD_PROJECT_name"],keys["PFACES_AGENT_USER_DICT_PROJECT_UPLOAD_PROJECT_blob"]]
                         var optionsValues=[projectname,project];
                         var optionBody=toJson(optionsKeys,optionsValues);
                         var request=userDictJson(keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_UPLOAD"],"submitted",optionBody,d.toLocaleString(),"");
                         var uploadResponse=pfacesSetValue(request,getLoginURL(response,urls[hwc-1]));
                         uploadResponse.then(function(res){console.log(res);
                         result=res;
                         return result;})
                       }}
                    else{
                       result="Not connected to the HWC"
                       return result;
                    }
             });

  }
};
/*
var config = {
     providerID: "GitHub",
     client_id: "e2edd60bf92cd9820e66",
     client_secret: "b0fd63cbc7f6dc0f1691e7d75e2b35a1cb8c229b",
     token: "e8d4d60b177c715103bdf97dd3cb7f9bbb3590df",
     authorization: "https://github.com/login/oauth/access_token",
     redirect_uri: "http://localhost:8080/shell/shellPage.html#/workspace/yassineH-OrionContent" // The URL where you is redirected back, and where you perform run the callback() function.
}
var client = new jso.JSO(config)
console.log(client);
let opts = {
      scopes: {request: ['profile']},
      request: {prompt: "none"},
      redirect_uri: "http://localhost:8080/shell/shellPage.html#/workspace/yassineH-OrionContent"
 }
 //client.setLoader(IFramePassive)
 //client.getToken(opts).then((token) => {console.log("I got the token: ", token)}).catch((err) => {console.error("Error from passive loader", err)})
 //var response=postRequest([],"https://github.com/login/oauth/access_token?client_id=e2edd60bf92cd9820e66&client_secret=b0fd63cbc7f6dc0f1691e7d75e2b35a1cb8c229b&code=e8d4d60b177c715103bdf97dd3cb7f9bbb3590df")
 var response=getRequest(null,"https://github.com/login/oauth/authorize?scope=user:email&client_id=e2edd60bf92cd9820e66")
 console.log(response);
 response.then(function(response){console.log(response);})
 */
