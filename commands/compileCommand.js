const compileCommand="pFacesCli compile";
var compileProperties = {
  name: compileCommand,
  description: "Compile project with pFaces",
  parameters: [{
    name: "project",
    type: "string",
    description: "Compile project with pFaces"
  }],
  returnType: "string"
};
var compileImpl = {
  callback: function(args, context) {
    const url='http://0.0.0.0:12345/pFaces/REST/dictionary/'+"00";
    var pk=["userID"];
    var userID=["00001"];
    var body={};
    body=toJson(pk,userID);
    var value=[JSON.stringify(body)];
    var request={};
    var key=["compile"];
    request=toJson(key,value);
    var result=pfacesMakeRequest("PUT",request,url);
    return result;
  }
};
