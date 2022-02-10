var fechaHoy = new Date();
var fechaDeMiCumpleaños = new Date("December 1, 2021");


var msToday = Math.floor( fechaHoy);
var msCumpleaños = Math.floor( fechaDeMiCumpleaños.getTime());
var msFaltantes = Math.floor(msCumpleaños- msToday);
var sgFaltantes = Math.floor(msFaltantes/1000);
var minFaltantes = Math.floor(sgFaltantes/60);
var hFaltantes = Math.floor(minFaltantes/60);
var diaFaltante = Math.floor(hFaltantes/24);
mostrar();

function mostrar(){
if(fechaHoy.getMonth() === fechaDeMiCumpleaños.getMonth() && fechaHoy.getDate() === fechaDeMiCumpleaños.getDate())
{
    console.log("Feliz Cumpleaños...!!!");
}
else{
    console.log("Bienvenido...");
}
};

