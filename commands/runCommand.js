const runCommand="pFacesCli run";
var runProperties = {
  name: runCommand,
  description: runCommand,
  parameters: [{
    name: "project",
    type: "string",
    description: "Run the project"
  }],
  returnType: "string"

};


var runImpl = {
  callback: function(args, context) {

    var result="";
    return result;
  }
};
