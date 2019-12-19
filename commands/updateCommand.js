const updateCommand="pFacesCli update";
var updateProperties = {
  name: updateCommand,
  description: "Update pFacesCli",
  parameters: [{
    name: "project",
    type: "string",
    description: "Check the status of a job"
  }],
  returnType: "string"
};


var updateImpl = {
  callback: function(args, context) {
    var result="";
    return result;
  }
};
