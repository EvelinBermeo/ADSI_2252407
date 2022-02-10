"use strict"
//Obtener la fecha y la hora GMT del navegador
console.log("===Fecha y Hora gMT===");
var TimeGMT = new Date();
console.log(TimeGMT);

//Convertir fecha a String
console.log("===Fecha y Hora Local===");
var timeCurrentStr = Date();
console.log(timeCurrentStr.toString());

// Extraer elementos de  la fecha
//Extraer el día
console.log("===Obteniendo el día===");
var numDiaSemana = new Date();
//El día 0 es el domingo
//El sabado es el día 6
console.log("Día de la semana: " + numDiaSemana.getDate());

//Mostrando el día de la semana
var fechaActual =  new Date();
var DiaStr = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]
var Mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",]
console.log("Dia de la semana: " + DiaStr[fechaActual.getDay()]);
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
    minutoActual = "0|" + minutoActual.toString();
} 

//Metodos mas comunes
console.log("===Fecha y Hora Local Desfragmentada===");
var currentTime = new Date();
console.log("Día de la semana: "+ currentTime.getDay());
console.log("Mes del año: "+ currentTime.getMonth());
console.log("Día del mes: "+ currentTime.getDate());
console.log("Año: "+ currentTime.getFullYear());
console.log("Hora: "+ currentTime.getHours());
console.log("Minutos: "+ currentTime.getMinutes());
console.log("Segundos: "+ currentTime.getSeconds());
console.log("Milisegundos: "+ currentTime.getMilliseconds());
console.log("Hoy es "+ DiaStr[currentTime.getDay() ] + " " + currentTime.getDay() + " de " + Mes[currentTime.getMonth()] + " del " + currentTime.getFullYear()+ "\n" + "Son las "+ horaActual + ":"+  minutoActual + "\n" + "Bienvenido!");

// Saber cuanto tiempo falta para llegar a determinada fecha
//Puedo agregar una fecha de forma similar a como se averigua la fecha actual

var fechaNavidad = new Date("December 24, 2021");
var fechaHoy = new Date();

//Hallamos los milisegunos transcurridos hasta el día de hoy
var msToday = Math.floor(fechaHoy.getTime());
var msNavidad = Math.floor(fechaNavidad.getTime());
var msFaltantes = Math.floor(msNavidad - msToday);
var sgFaltantes = Math.floor(msFaltantes / 1000);
var minFaltantes = Math.floor(sgFaltantes / 60);
var hFaltantes = Math.floor(minFaltantes / 60);
var DiaFaltantes = hFaltantes / 24;
var number = 29.293333402777776;
var DiaFaltantes1 = Math.floor(number);
console.log("Dias: " + DiaFaltantes1+ ", "+ "Horas: " + hFaltantes + ", "+ "Minutos: " + minFaltantes+ ", "+ "Segundos: " + sgFaltantes + ", "+"Milisegundos: " + msFaltantes  );





