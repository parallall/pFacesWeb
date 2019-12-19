function putRequest(body,url){
         const Http = new XMLHttpRequest();
         var promise = new orion.Deferred();
         Http.open("PUT", url,true);
         Http.setRequestHeader("Content-Type", "application/json");
         Http.onerror = function(e){
               promise.resolve(e);
               console.log("Connection ERROR");
         };
         Http.onreadystatechange = function(e) { // Call a function when the state changes.
         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            promise.resolve(Http.response);
         };
         }
         Http.send(JSON.stringify(body));
         return promise;

}
function postRequest(body,url){
         const Http = new XMLHttpRequest();
         var promise = new orion.Deferred();
         Http.open("POST", url,true);
         Http.setRequestHeader("Content-Type", "application/json");
         Http.onerror = function(e){
               promise.resolve(e);
               console.log("Connection ERROR");
         };
         Http.onreadystatechange = function(e) { // Call a function when the state changes.
         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            promise.resolve(Http.response);
         };
         }
         Http.send(JSON.stringify(body));
         return promise;

}
function getRequest(body,url){
         const Http = new XMLHttpRequest();
         var promise = new orion.Deferred();
         Http.open("GET", url,true);
         Http.setRequestHeader("Content-Type", "application/json");
         Http.onerror = function(e){
               promise.resolve(e);
               console.log("Connection ERROR");
         };
         Http.onreadystatechange = function(e) { // Call a function when the state changes.
         if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            promise.resolve(Http.response);
         };
         }
         Http.send(JSON.stringify(body));
         return promise;

}
