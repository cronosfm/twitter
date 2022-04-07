var url = window.location.href;
var pwaLocation = '/cronosfm/twitter/sw.js';
 
if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
    console.log(pwaLocation);
    navigator.serviceWorker.register(pwaLocation);
}