const pFacesListHWCsCommand="pFacesCli list-hwcs";
var pFacesListHWCsProperties = {
  name: pFacesListHWCsCommand,
  description: "pFacesCli list-hwcs",
  returnType: "string"
};
var pFacesListHWCsImpl = {
  callback: function(args, context) {
    var d=new Date();
    console.log(urls);
    const hwcsHeadres=[messages["SHELL_MESSAGE_LOGIN_HWC_NAME"],messages["SHELL_MESSAGE_LOGIN_HWC_ADRESS"],messages["SHELL_MESSAGE_LOGIN_HWC_STATUS"],
    messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"],messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_URL"]];
    var hwcs =HWCs(hwcsHeadres,urls,[],[],[]);
    var responses=pfacesGetAccessResponse(userID,urls);
    return   orion.Deferred.all(responses).then(function(responses){
             console.log(responses[0]);
             hwcs=checkHWCs(responses,hwcs,userID,headers,d,urls);
             var table=stringTable.create(hwcs);
             return table});
  }
};
