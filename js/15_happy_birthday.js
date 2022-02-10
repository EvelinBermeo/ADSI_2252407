var fechaDeMiCumpleaños = new Date("July 5, 2022");
var fechaHoy = new Date();

var msToday = Math.floor( fechaHoy.getTime());
var msCumpleaños = Math.floor( fechaDeMiCumpleaños.getTime());
var msFaltantes = Math.floor(msCumpleaños- msToday);
var sgFaltantes = Math.floor(msFaltantes/1000);
var minFaltantes = Math.floor(sgFaltantes/60);
var hFaltantes = Math.floor(minFaltantes/60);
var diaFaltante = Math.floor(hFaltantes/24);

console.log("Faltan " + diaFaltante + " días para mi próximo cumpleaños. :)");
