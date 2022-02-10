"use strict"

var costo = 32000;
var impuesto = 3500;
console.log("SubTotal: $" + (costo + impuesto));
console.log("El costo del domicilio es de $2.000");
console.log("Con domicilio: $" + (costo + impuesto + 2000));

console.log(Number.MAX_SAFE_INTEGER);

console.log(Math.pow(2,53) - 1);

let binario = "11111111111111111111111111111111111111111111111111111";
let binarioEnDecimal = parseInt(binario, 2);
console.log(binarioEnDecimal);
console.log(Number.MIN_SAFE_INTEGER);

var tryConvertToNumber = parseInt("Hola Mundo");
console.log(tryConvertToNumber);