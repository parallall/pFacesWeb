const listJobsCommand="pFacesCli list-jobs";
var listJobsProperties = {
  name: listJobsCommand,
  description: "List all jobs",
  returnType: "string"

};
var listJobsImpl = {
  callback: function(args, context) {
    var d=new Date();
    var response=pfacesGetAccessResponse(userID,url);
    return "Hello";
  }
};
