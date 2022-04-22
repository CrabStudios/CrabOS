const express = require('express');
const cbos = express();
let crabos = require("../assets/conf.json");
let error = crabos.error
cbos.use(express.static(__dirname + crabos.publicDir)); // crabos.publicDir
cbos.use(function(req, res, next) {
  res.status(404).send(error);
});
cbos.listen(crabos.port, () => {
  console.log('Servidor iniciado na porta: ' + crabos.port);
}); 
console.log("------------------------");
