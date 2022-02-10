var promedio = 2.596482;
var promedioStr = promedio.toString();

if(prmedioStr.charArt(promedioStr.length - 2 === "5")){
    promedioStr = promedioStr.slice(0, promedioStr.length - 1) + 6
}
promedio = Number(promedioStr);
var newProm = promedio.toFixed(2);
console.log("Resultado: " + newProm)

//condicional es 8
condicional