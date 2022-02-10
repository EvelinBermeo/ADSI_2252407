//Conversión de forma implicita
var num1 = "12";
var num2 = 4;
console.log("Resultado suma: "+ (num1+num2));
console.log("Resultado resta: " +(num2 - num1));
console.log("Resultado multiplicación: " +(num2 * num1));
console.log("Resultado división: " +(num2 /num1));


//Conversión de forma explicita

var num3 = "20";
var num4 = 2;
console.log("Resultado de conversión explicita ")+(parseInt(num3) + num4);

//----------
var num7 = "8.2";
var num8 = 3;
console.log("Resultado suma: " + (Number(num7)+num8));

//conversion de entero a texto
var num9 = 12;
var num10 = 10;
console.log("Resultado de concat: " +(num9.toString()+ num10.toString()))
