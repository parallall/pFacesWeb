const pFacesLoginCommand="pFacesCli login";
var pFacesLoginProperties = {
  name: pFacesLoginCommand,
  description: "pFacesCli login",
  returnType: "string"
};
var pFacesLoginImpl = {
  callback: function(args, context) {
    var d=new Date();
    console.log(urls);
    const hwcsHeadres=[messages["SHELL_MESSAGE_LOGIN_HWC_NAME"],messages["SHELL_MESSAGE_LOGIN_HWC_ADRESS"],messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]];
    var hwcs =HWCs(hwcsHeadres,urls,[],[],[]);
    var responses=pfacesGetAccessResponse(userID,urls);
    return   orion.Deferred.all(responses).then(function(responses){
             hwcs=checkResponses(responses,hwcs,userID,headers,d,urls);
             var table=stringTable.create(hwcs);
             return table});
}
};
