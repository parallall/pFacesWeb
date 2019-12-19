const statusCommand= "pFacesCli status";
var statusProperties = {
  name: statusCommand,
  description: "Check the status of a job",
  parameters: [{
    name: "job",
    type: "string",
    description: "Check the status of a job"
  }],
    returnType: "string"
};

var statusImpl = {
  callback: function(args, context) {
    var result="";
    return result;
  }
};
