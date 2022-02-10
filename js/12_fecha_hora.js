//Obtener la fecha y la hora GMT
"use strict"
console.log("===fecha y hora GMT===");
var TimeGMT = new Date();
console.log(TimeGMT);

// convertir fecha a string
console.log("===fecha y hora local===");
var timeCurrentStr = new Date();
console.log(timeCurrentStr.toString());

//Extraer elementos de la fecha 
//Extraer dia 
console.log("===Obteniedo el dia===");
var numSemana = new Date();
console.log("Día de la semana: "+ numSemana.getDay());

//mostrando el dia de la semana
var Dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves","Viernes","Sábado"];
console.log("El dia de la semana es :" + Dia[numSemana.getDay()]);

//Mostrar fecha formateada
console.log("===fecha y hora local desfragmentada===");
var currentTime = new Date();
console.log("Día de la semana: "+ currentTime.getDay());
console.log("Mes del año: "+ currentTime.getMonth());
console.log("Día del mes: "+ currentTime.getDate());
console.log("Año: "+ currentTime.getFullYear());
console.log("Hora: "+ currentTime.getHours());
console.log("Minutos: "+ currentTime.getMinutes());
console.log("Segundos: "+ currentTime.getSeconds());
console.log("Milisegundos: "+ currentTime.getMilliseconds());


var mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio","Julio","Agosto","Septiempre","Octubre","Noviembre","Diciembre"];


// if(horaActual > 12){
//     currentTime.getHours = "p.m";
//     horaActual = horaActual - 12;
// }
// else{
//     currentTime.getHours= "a.m";
// }

console.log("Hoy es " + Dia[numSemana.getDay()] + " " + currentTime.getDate() + " de "+ mes[currentTime.getMonth()] + " del año " + 
currentTime.getFullYear() + "\n" + "Son las " + currentTime.getHours() + ":" + currentTime.getMinutes() + "\n" + "Bienvenido...!!");

// var mesDiaStr = mesDia[fechaActual.getMonth()];
// var horaActual = fechaActual.getHours();
// var minutosActual = fechaActual.getMinutes();
// var setMorningAfternoon = ""

var fechaNavidad = new Date("December 24, 2021");
var fechaHoy = new Date();
var totalSegundos = Math.floor(2531792681/1000);
var totalMinutos = Math.floor(totalSegundos/60);
var totalHoras = Math.floor(totalMinutos/60);
var totalDias = Math.floor(totalHoras/24);
var number1 = 29.303156030092595;
var numberInt = Math.floor(number1);



var msToday = fechaHoy.getTime();
var msNavidad = fechaNavidad.getTime();
var msFaltantes = msNavidad - msToday;
console.log(msFaltantes +"\n"+ " Segundos: "+totalSegundos + "\n" +" Minutos: " + totalMinutos +"\n" +" Horas: " + totalHoras + "\n" +" Días: " + numberInt);

