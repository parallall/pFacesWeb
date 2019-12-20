const listDevicesCommand="pFacesCli list-devices";
var listDevicesProperties = {
  name: listDevicesCommand,
  description: "List all hardware configurations",
  parameters: [{
            name: "hwc",
            type: "string",
            description: "Hardware configuration target"
        }],
  returnType: "string"
};
var listDevicesImpl = {
  callback: function(args, context) {
    var hwcStr=args.hwc;
    var hwc=parseInt(hwcStr.charAt(hwcStr.length-1));
    var response=pfacesGetAccessResponse(userID,urls[hwc-1]);
    return   response.then(function(response){
                    var result= new orion.Deferred();
                    console.log(response);
                    if(!isObject(response)){
                       console.log("hello");
                       var permission=checkPermission(response)
                       if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"]){
                         console.log(getLoginURL(response,urls[hwc-1]));
                         var devices=pfacesGetValue([keys["PFACES_AGENT_USER_DICT_DEVICE_LIST"]],getLoginURL(response,urls[hwc-1]));
                         devices.then(function(devices){
                         devices=JSON.parse(JSON.parse(devices)[keys["PFACES_AGENT_USER_DICT_DEVICE_LIST"]]);
                         devices.forEach(function(device){device["device_id"]=device["device_id"]+"______"});
                         var maxLength=0;
                         devices.forEach(function(device){if(maxLength<device["device_name"].length){maxLength=device["device_name"].length}});
                         devices.forEach(function(device){if(maxLength>device["device_name"].length){
                          for(i=0;i<(maxLength-device["device_name"].length);i++){device["device_name"]=device["device_name"]+"___"}
                          }
                         });
                         console.log(maxLength);
                         var table=stringTable.create(devices);
                         console.log(table);
                         result.resolve(table)})
                       }}
                      return result;
             });
           }
}
