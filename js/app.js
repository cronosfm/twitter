var url = window.location.href;
var pwaLocation = '/twitter/sw.js';
 
if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
navigator.serviceWorker.register(pwaLocation);
}