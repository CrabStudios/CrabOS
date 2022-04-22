var proxy = require("http");
let crabos = require("../assets/conf.json");

proxy.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Proxy Port: ' + crabos.proxyPort + ' | Main Port: ' + crabos.port);
}).listen(crabos.proxyPort);
console.log("Proxy Iniciado na porta: " + crabos.proxyPort);