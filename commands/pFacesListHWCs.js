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
    var space="                        ";
    return   orion.Deferred.all(responses).then(function(responses){
             hwcs=checkHWCs(responses,hwcs,userID,headers,d,urls);
             var hwcsTable="\n\n";
             for(i=0;i<hwcs.length;i++){
               hwcsTable+="HWC NAME: hwc"+(i+1)+"\n"
               +"STATUS: "+hwcs[i]["STATUS"]+"\n"
               +"LOGIN STATUS: "+hwcs[i]["LOGIN STATUS"]+"\n"
               +"ADDRESS: "+hwcs[i]["ADDRESS"]+"\n"
               +"LOGIN URL: "+hwcs[i]["LOGIN URL"]+"\n";
               if(i+1<hwcs.length){
                 hwcsTable+="\n\n";
               }
             }
             return hwcsTable;
           });
  }
};
