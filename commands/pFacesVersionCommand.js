const pFacesVersionCommand="pFacesCli pfaces-version";
var pFacesVersionProperties = {
  name: pFacesVersionCommand,
  description: "pFacesCli pfaces-version",
  parameters: [{
            name: "hwc",
            type: "string",
            description: "Hardware configuration target"
        }],
  returnType: "string"

};
var pFacesVersionImpl = {
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
                         var version=pfacesGetValue([keys["PFACES_AGENT_USER_DICT_AGENT_VERSION"]],getLoginURL(response,urls[hwc-1]));
                         version.then(function(version){
                           result.resolve(JSON.parse(version)[keys["PFACES_AGENT_USER_DICT_AGENT_VERSION"]]);})
                       }}
                    else{
                       result.resolve("Not connected to the HWC");
                    }
                    return result;
             });
             ;}
};
