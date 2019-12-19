const listDevicesCommand="pFacesCli list-devices";
var listDevicesProperties = {
  name: listDevicesCommand,
  description: "List all hardware configurations",
  returnType: "string"

};
var listDevicesImpl = {
  callback: function(args, context) {
    return "Hello";
  }

};
