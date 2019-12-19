function decode_utf8(s){

     return decodeURIComponent(escape(s));
}
function toJson(keys,values){
    var js ={};
    for(var i=0;i<keys.length;i++){
         js[keys[i]]=values[i];
    }
    return js;
}
function isJSON(str){
     try{
           JSON.parse(str);
     }
     catch(e){
            return false;
     }
     return true;
}
function isObject(val){
   return (typeof val === 'object');
}
function HWCs(hwcsHeadres,hwcsAdress,hwcsStatus,hwcsLoginStatus,hwcsLoginUrl){
  var HWCs=[];
  for(i=0;i<hwcsAdress.length;i++){
     var count=i+1;
     if(hwcsHeadres.length==5){
     HWCs.push({ [hwcsHeadres[0]]: "hwc"+count,
     [hwcsHeadres[1]]:hwcsAdress[i],
     [hwcsHeadres[2]]:hwcsStatus[i],
     [hwcsHeadres[3]]:hwcsLoginStatus[i],
     [hwcsHeadres[4]]:hwcsLoginUrl[i]})}
     else{
       HWCs.push({ [hwcsHeadres[0]]: "hwc"+count,
       [hwcsHeadres[1]]:hwcsAdress[i],
       [hwcsHeadres[2]]:hwcsLoginStatus[i]})
     }
  }
  return HWCs;
}
function getHWC(number){
  var settings=[];
  var hwcsettings={};
  for(i=1;i<number+1;i++){
    var mainjson={};
    var propertiesNameBoxJson={};
    var propertiesURLBoxJson={};
    var props=[];
    mainjson["pid"]="example.pod"+i;
    mainjson["name"]= "HWC "+i;
    mainjson["categoryLabel"]= "HWC CONFIGURATION";
    mainjson["category"]="HWC_CONFIGURATION";
    propertiesNameBoxJson["id"]="name"+i;
    propertiesNameBoxJson["name"]="HWC Name "+i;
    propertiesNameBoxJson["type"]="string";
    propertiesURLBoxJson["id"]="url"+i;
    propertiesURLBoxJson["name"]="HWC ADDRESS "+i;
    propertiesURLBoxJson["type"]="string";
    props.push(propertiesNameBoxJson);
    props.push(propertiesURLBoxJson);
    mainjson["properties"]=props;
    settings.push(mainjson);
  }
  hwcsettings["settings"]=settings;
  return hwcsettings;

}
function readTextFile(file)
{

    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                console.log(Hello);
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}
function getLoginPage(){
    var settings=[];
    var hwcsettings={};
    var mainjson={};
    var propertiesNameBoxJson={};
    var propertiesPasswordBoxJson={};
    var propertiesHWCsBoxJson={};
    var propertiesGitAddressBoxJson={};
    var props=[];
    mainjson["pid"]="example.pod";
    mainjson["name"]= "pFaces HWC CONFIGURATION";
    mainjson["categoryLabel"]= "pFaces HWC CONFIGURATION";
    mainjson["category"]="HWC_CONFIGURATION";
    propertiesNameBoxJson["id"]="login";
    propertiesNameBoxJson["name"]="Login";
    propertiesNameBoxJson["type"]="string";
    propertiesPasswordBoxJson["id"]="pass";
    propertiesPasswordBoxJson["name"]="Password";
    propertiesPasswordBoxJson["type"]="string";
    propertiesGitAddressBoxJson["id"]="git";
    propertiesGitAddressBoxJson["name"]="Git Address";
    propertiesGitAddressBoxJson["type"]="string";
    propertiesHWCsBoxJson["id"]="hwcs";
    propertiesHWCsBoxJson["name"]="HWCs";
    propertiesHWCsBoxJson["type"]="string";
    props.push(propertiesNameBoxJson);
    props.push(propertiesPasswordBoxJson);
    props.push(propertiesGitAddressBoxJson);
    props.push(propertiesHWCsBoxJson);
    mainjson["properties"]=props;
    settings.push(mainjson);
    hwcsettings["settings"]=settings;
    return hwcsettings;

}
