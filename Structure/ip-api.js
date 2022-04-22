let request = require('request');
 
let url = `http://ip-api.com/json`
let dados = '';
 
request(url, function (err, response, body) {
   if(err){
       console.log('error:', err);
   } else {
       let ipInfo = JSON.parse(body);
       dados = `${ipInfo.query}`
       console.log("IP: " + dados + ' | LocalHost: ' + '127.0.0.1');
   }
});
