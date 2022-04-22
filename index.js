const crabos = require("./assets/conf.json");
// CrabOS@1.0.0

console.clear()
console.log("------------------------")
console.log("CrabOS@1.0.0");
console.log("[INFO]: Iniciando Instância...");
console.log("------------------------");
require("./root/proxy"); // status server
require("./root/main"); //  main server
// console.log("------------------------");

require("./Structure/ip-api");

// suporte => help.crabos.ml