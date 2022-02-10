"use strict"


var fechaActual = new Date();
var anyoActual = fechaActual.getFullYear();
var mesActual = fechaActual.getMonth();
var diaActual = fechaActual.getDate();
var horaActual = fechaActual.getHours();
var minutosActual = fechaActual.getMinutes();

mostrarHora();

function mostrarHora() {
    var horaActual = fechaActual.getHours();
    var minutoActual = fechaActual.getMinutes();
    var setMorningAfternoon = "";
    if(horaActual > 12){
        setMorningAfternoon = "P.M.";
        horaActual = horaActual -12;

    }
    else {
        setMorningAfternoon = "A.M."
    }
    if(minutoActual < 10) {
        minutoActual = "0" + minutoActual.toString();
    } 
    if(horaActual < 10) {
        horaActual = "0" + horaActual.toString();
    } 
    alert("Hora Actual: " + horaActual + ":" + minutosActual);
   
}
 function mostrarFecha() {
     var fechaActual = new Date();
     var diaActual = fechaActual.getDate();
     var mesActual = fechaActual.getUTCMonth();
     var anyoActual = fechaActual.getFullYear();
     var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
     alert("Hoy es " + diaActual + " de " + meses[mesActual] + " del año " + anyoActual);
 }

 //Funcion con parametros

 function saludo(saludoNavidad) {
    var saludoSencillo = "Bienvenidos."
    if (mesActual === 11) {
        alert(saludoSencillo + " " + saludoNavidad);
    }
    else {
        alert(saludoSencillo);
    }
 }
 function presentacion(nombre , titulado) {
     alert("Mi nombre es " + nombre + " y soy del titulado " + titulado)
 }

 //Funcion con retorno+
 //Si la compra es superior a 10000 tiene 10% de descuento
 //Si la compra esta entre 5000 tiene 5% de descuento

 function validarDescuento(compra) {
     var total = 0;
     if(compra >= 10000){
         total = compra * .9;
     }
     else if (compra >= 5000 && compra <= 9999)
    {
        total = compra * .95;
    }
    else if (compra < 5000){
        total = compra;
    }
    else {
        total = -1;
    }
    return total;
 }
 function calcularDescuento() {
     if(costo = -1 ){
         alert("Ha surgido un problema")
     }
     else if (costo >= 1){
        alert("Costo total: " + validarDescuento(costo));
     }
 }