function pfacesLogin(userID,cl_version,login_request_time,url){
                    var body={};
                    var pk=[keys["PFACES_AGENT_LOGIN_DICT_USER_ID"],keys["PFACES_AGENT_LOGIN_DICT_USER_KEY"],
                    keys["PFACES_AGENT_LOGIN_DICT_USER_CLIENT_VERSION"],keys["PFACES_AGENT_LOGIN_DICT_USER_REQUEST_TIME"],
                    keys["PFACES_AGENT_LOGIN_DICT_USER_LOGIN_TIME"],keys["PFACES_AGENT_LOGIN_DICT_USER_LOGIN_URL"],
                    keys["PFACES_AGENT_LOGIN_DICT_USER_LOGIN_PORT"],keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION"],
                    keys["PFACES_AGENT_LOGIN_DICT_USER_INFO_MESSAGE"]];
                    var pkValue=[userID,"",cl_version,login_request_time,"","","","requested",""];
                    body=toJson(pk,pkValue);
                    var request={};
                    var value=[JSON.stringify(body)];
                    request=toJson([userID],value);
                    var promise= putRequest(request,url);
                    return promise;
}
function pfacesGetAccessResponse(userID,url){
                    if(!Array.isArray(url)){
                       var promise =postRequest([userID],url);
                       return promise;}
                    else{
                       var promises=[];
                    for(i=0;i < url.length;i++){
                       promises.push(postRequest([userID],url[i]));
                       }
                        return promises;
                    }
}

function pfacesGetValue(body,url){
    var promise=postRequest(body,url);
    return promise;
}
function pfacesSetValue(body,url){
    var promise=putRequest(body,url);
    return promise;
}
function checkPermission(response){
          var jsonval=JSON.parse(response);
          var permission="";
          if(isJSON(jsonval[userID])){permission=JSON.parse(jsonval[userID])[keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION"]];};
          return permission;
}
function getLoginURL(response,url){
          var address=url.replace("http://","");
          address=address.substring(0,address.indexOf(":"));
          var jsonval=JSON.parse(response);
          var dictURL=JSON.parse(jsonval[userID])[keys["PFACES_AGENT_LOGIN_DICT_USER_LOGIN_URL"]];
          const userURL=dictURL.replace('*',address);
          return userURL;
}
function userDictJson(key,status,option,time,message){
     var js={};
     js[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_STATUS_JSON_KEY"]]=status;
     js[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_OPTION_JSON_KEY"]]=option;
     js[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_TIME_JSON_KEY"]]=time;
     js[keys["PFACES_AGENT_USER_DICT_COMMAND_REQUEST_MESSAGE_JSON_KEY"]]=message;
     var value=[JSON.stringify(js)];
     js=toJson([key],value);
     return js;
}

function checkResponses(responses,hwcs,userID,headers,d,urls){
  for(i=0;i<responses.length;i++){
     var permission="";
     if(!isObject(responses[i])){
       permission=checkPermission(responses[i]);
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_connection_error"]}
     else{
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_connection_error"];}
     if(permission=="" && !isObject(responses[i])){
       resultDisplay=pfacesLogin(userID,headers.version,d.toLocaleString(),urls[i]);
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_request_is_being_processed"];}
     else{
       if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"])
       {hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_granted"];}
       else if (permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_denied"])
       {hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_access_denied"];}
       else if (permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_requested"])
       {hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_request_is_being_processed"];}
     };}
     return hwcs;
}
function checkHWCs(responses,hwcs,userID,headers,d,urls){
  for(i=0;i<responses.length;i++){
     var permission="";
     if(!isObject(responses[i])){
       permission=checkPermission(responses[i]);}
     else{
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_connection_error"];
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_URL"]]="NA";
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_STATUS"]]="NA";
       }
     if(permission=="" && !isObject(responses[i])){
       hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_request_is_being_processed"];}
       else{
         if(permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_granted"])
         {hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_granted"];
          hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_URL"]]=getLoginURL(responses[i],urls[i]);
          hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_STATUS"]]="online";}
         else if (permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_denied"])
         {hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_access_denied"];}
         else if (permission==keys["PFACES_AGENT_LOGIN_DICT_USER_PERMISSION_VALUE_requested"])
         {hwcs[i][messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS"]]=messages["SHELL_MESSAGE_LOGIN_HWC_LOGIN_STATUS_request_is_being_processed"];}
       };}
     return hwcs;
}
