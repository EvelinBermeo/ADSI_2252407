var anyo = "2019";
var anyo2LastChar = anyo.slice(2,4);
console.log(anyo2LastChar);

// Buscando espacios dobles
var nombre = "Daniela  Sotelo";
for(i =0; i<nombre.length; i++){
    if(nombre.slice(i, (i + 2))=== "  "){
        console.log("La cadena tiene puntos dobles");
        break;
    }
}

//Reemplazando parte de la cadena de texto
var hobby = "Programas en Java";
var newLang = "Phyton";
for(i = 0; i < hobby.length; i++){

    if(hobby = hobby.slice(i, i + 4)=== "Java"){
        hobby = hobby.slice(0 , i);
    }
}
console.log(hobby + newLang);


//Programar en Java con Indexfoz
var hobby2 = "Programar en JavaScript a tope";
var firstChar = hobby2.indexOf("JavaScript");
if(firstChar !== -1){
    console.log(firstChar);
    hobby2 = hobby2.slice(0, firstChar) + "php" + hobby2.slice(firstChar + 10);
    console.log(hobby2);
}

//Buscando caracteres especiales
var frase = "Que onda perros..!!";
for (var i = 0; i < frase.length; i++){
    if(frase.charAt(i)==="!"){
        console.log("La cadena ta mala we");
    }
}

// Reemplazar con el método replace
var ciudad = "Valle de Pitalito";
ciudad = ciudad.replace("pitalito")