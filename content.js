chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
 let clientesRecibidos = JSON.parse(request);

 console.log(clientesRecibidos);

})