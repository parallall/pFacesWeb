const infoCommand="pFacesCli connect";
var infoProperties = {
  name: infoCommand,
  description: "pFacesCli connect",
  returnType: "string"

};
var infoImpl = {
    callback: function(args, context) {
      var d=new Date();
      var response=pfacesGetAccessResponse(userID,url);
      return response.then(function(response){
                      var resultDisplay="";
                      var permission=checkPermission(response);
                      if(permission==[keys["gr"]]){
                          resultDisplay=pfacesGetValue([keys["pfv"]],getLoginURL(response,userID,adress));}
                      else{
                          resultDisplay=JSON.parse(jsonval[userID])[keys["im"]]};
                      return resultDisplay;
               });
  }
};
