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
             var hwcsTable="HWC NAME            LOGIN STATUS\n";
             hwcs=checkResponses(responses,hwcs,userID,headers,d,urls);
             console.log(hwcs.length);
             for(i=0;i<hwcs.length;i++){
               hwcsTable+="hwc"+(i+1)+"                        "+hwcs[i]["LOGIN STATUS"]+"\n";
             }
             console.log(typeof(hwcsTable));
             //var table=stringTable.create(hwcs);
             //return table
             return hwcsTable;
             });
}
};
