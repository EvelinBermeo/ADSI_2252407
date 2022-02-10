//Metodo Slice
var anyo = "2019";
var anyo2LastChar = anyo.slice(2, 4);
console.log(anyo2LastChar);


//Buscando espacios dobles
var nombres = "Evelin Bermeo";
for(i = 0; i < nombres.length;  i++){
    if(nombres.slice(i, (i + 2)) === "  ") {
        console.log("La cadena tiene espacios dobles");
        break;
    }
}

//Reemplazando parte de la cadena de texto
var hobby = "Programar en Java";
var newLang = "Python";
for( i = 0; i < hobby.length; i++) {
    if(hobby.slice(i, i +4) === "Java") {
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newLang);

//Reemplazar texto Indexof

var hobby2 = "Programar en JavaScript a tope";
var firtChar = hobby2.indexOf("JavaScript");
if(firtChar !== -1) {
    console.log(firtChar);
    hobby2 = hobby2.slice(0, firtChar) + "php" + hobby2.slice(firtChar + 10);
    console.log(hobby2);
}

//Buscando caracteres especiales

var frase = "Hola Mundo!";
for( var i = 0;  i < frase.length; i++) {
    if(frase.charAt(i) === "!") {
        console.log("La cadena tiene signos de admiración");
    }
}

//Reempazar con el metoce replace

var ciudad = "valle de Pitalito";
ciudad = ciudad.replace("Pitalito" , "Laboyos");
console.log(ciudad);