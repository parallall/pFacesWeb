const killCommand= "pFacesCli kill";
var killProperties = {
  name: killCommand,
  description: "Terminate a job",
  parameters: [{
    name: "job",
    type: "string",
    description: "Terminate a job"
  }],
    returnType: "string"
};

var killImpl = {
  callback: function(args, context) {
    const url='http://0.0.0.0:12345/pFaces/REST/dictionary/'+"00";
    var pk=["userID"];
    var userID=["00001"];
    var body={};
    body=toJson(pk,userID);
    var value=[JSON.stringify(body)];
    var request={};
    var key=["kill"];
    request=toJson(key,value);
    var result=pfacesMakeRequest("PUT",request,url);
    return result;
  }
};
