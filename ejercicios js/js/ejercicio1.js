/*Ejercicio 1*/
console.log("Hola Mundo");
/*Ejercicio 2*/
let nombre = "Evelin";
console.log("Bienvenida " + nombre);
/*Ejercicio 3*/
 let costoProducto = 2000;
 let impuesto =  0.5;
 let valorDomicilio = 2000;
 let valorTotal =costoProducto + (costoProducto *impuesto) + valorDomicilio;

 console.log("Valor total: $" + valorTotal);
 /*Ejercicio 4
 Declarar el costo de una compra y determinar el descuento
 dependiendo del monto
 1. Si el costo es menor o igual a $30.000, el descuento
 es del 5% sobre el total de la compra
 2. Si el descuento es superior a $30.000 e inferior a %100.000 del descuento
 es del 10% sobre el total de la compra
 3. Si el descuento es superior a %100.000 el descuento es del 15% sobre el total 
 de la compra*/
 
  
let costoCompra = 90000;
let CostoTotal = 0 ;

if (costoCompra <= 30000) {
    CostoTotal = costoCompra - (costoCompra * 0.05)
    console.log("El costo total es de: " + CostoTotal);
}
else if (costoCompra >= 30000 && 100000) {
    CostoTotal = costoCompra - (costoCompra * 0.10)
    console.log("El costo total es de: " + CostoTotal);
}
else if (costoCompra > 100000) {
    CostoTotal = costoCompra - (costoCompra * 0.15)
    console.log("El costo total es de: " + CostoTotal);
}

/* Ejercicio 5
Crear un arreglo con 5 elementos que contengan los nombres de 
cada uno de ustedes y recorrer dicho arreglo con un for 
para mostrar en pantalla cada uno de los elementos*/

aprendices = ["Evelin","Daniela","Karen","Francisco","David"]
for(i =0; i <= 4; i++){
    console.log("Aprendiz N. "+ (i + 1) + ": " + aprendices[i]);
}

/*Ejercicio 6
Declarar una cadena de texto y convertir la primer letra a mayusca 
y el resto de letras a minusculas*/

var nombre1 = "manuela";
nombre1= nombre1.toLowerCase();
nombre1 = nombre1[0].toUpperCase() + nombre1.slice(1);
console.log(nombre1);




     
   
