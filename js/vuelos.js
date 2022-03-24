window.onload = function () {
    recorrer();
}
class Vuelos {
    constructor(horaSalida,cuidadSal,duracion, horaLlegada, destino,valor){
        this.horaSalida = horaSalida;
        this.cuidadSal=cuidadSal;
        this.duracion=duracion;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
        this.valor = valor;
        
    }
}
let horaSalida1 = new Date(2022,03,18,10,10,0);
let horaSalida1Str= horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date(2022,03,18,12,10,0);
let horaLlegada1Str= horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let horaSalida2 = new Date(2022,03,18,8,10,0);
let horaSalida2Str= horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date(2022,03,18,9,10,0);
let horaLlegada2Str= horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();



let Vuelo =[
    {
        "horaSalida" : horaSalida1Str,
        "cuidadSal": "BOG",
        "duracion": "2 h 20 min",
        "horaLlegada" : horaLlegada1Str,
        "destino" : "ADZ",
        "valor" : "657.900,00"
    },
    {
        "horaSalida" : horaSalida2Str,
        "cuidadSal": "BOG",
        "duracion": "3 h 20 min",
        "horaLlegada" : horaLlegada2Str,
        "destino" : "ADZ",
        "valor" : "557.900,00"
    },
    {
        "horaSalida" : horaSalida2Str,
        "cuidadSal": "BOG",
        "duracion": "1 h 20 min",
        "horaLlegada" : horaLlegada2Str,
        "destino" : "ADZ",
        "valor" : "400.900,00"
    },

];

function recorrer() {
    for(let i = 0; i < Vuelo.length; i++){
        let horaSalidaVuelo = Vuelo[i].horaSalida;
        let ciudadSalVuelo = Vuelo[i].cuidadSal;
        let duracionVuelo = Vuelo[i].duracion;
        let horaLlegadaVuelo = Vuelo[i].horaLlegada;
        let destinoVuelo = Vuelo[i].destino;
        let valorVuelo = Vuelo[i].valor;
        mostrarInfo(horaSalidaVuelo,ciudadSalVuelo,duracionVuelo,horaLlegadaVuelo,destinoVuelo,valorVuelo)
    }
}
function mostrarInfo(horaSalidaVuelo,ciudadSalVuelo,duracionVuelo,horaLlegadaVuelo,destinoVuelo,valorVuelo) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorInfoVuelos = document.createElement("div");

contenedorPrincipal.appendChild(contenedorInfoVuelos);

let spantitulo = document.createElement("span")
let textSpantitulo = document.createTextNode("Más rápido")
let labelhoraSal = document.createElement("label");
let textoHoraSal = document.createTextNode(horaSalidaVuelo);
let labeltext = document.createElement("label");
let texto = document.createTextNode("Duración");
let labelCiuSal = document.createElement("label");
let textoCiuSal = document.createTextNode(ciudadSalVuelo);
let labelDurSal = document.createElement("label");
let textoDurSal = document.createTextNode(duracionVuelo);
let labelhoraLleg = document.createElement("label");
let textoHoraLleg = document.createTextNode(horaLlegadaVuelo);
let labelDestino = document.createElement("label");
let textoDestino = document.createTextNode(destinoVuelo);
let separador = document.createElement("hr");

let labeltextvalor = document.createElement("label");

let labelvalorVuelo = document.createElement("label");
let textvalorVuelo = document.createTextNode("$" +valorVuelo);

contenedorInfoVuelos.appendChild(spantitulo);
spantitulo.appendChild(textSpantitulo);
contenedorInfoVuelos.appendChild(labelhoraSal);
labelhoraSal.appendChild(textoHoraSal);
contenedorInfoVuelos.appendChild(labeltext);
labeltext.appendChild(texto);
contenedorInfoVuelos.appendChild(labelCiuSal);
labelCiuSal.appendChild(textoCiuSal);
contenedorInfoVuelos.appendChild(labelDurSal);
labelDurSal.appendChild(textoDurSal);
contenedorInfoVuelos.appendChild(labelhoraLleg);
labelhoraLleg.appendChild(textoHoraLleg);
contenedorInfoVuelos.appendChild(labelDestino);
labelDestino.appendChild(textoDestino);
contenedorInfoVuelos.appendChild(separador);
contenedorInfoVuelos.appendChild(labeltextvalor);

contenedorInfoVuelos.appendChild(labelvalorVuelo);
labelvalorVuelo.appendChild(textvalorVuelo);

contenedorInfoVuelos.setAttribute("class", "style-contenido");
spantitulo.setAttribute("class","style-titulo");
labelhoraSal.setAttribute("class","horaSal");
labelCiuSal.setAttribute("class","ciudadSal");
labeltext.setAttribute("class","txtduracion");
labelDurSal.setAttribute("class","duracion");
labelhoraLleg.setAttribute("class","horaLleg");
labelDestino.setAttribute("class","destino");
separador.setAttribute("class","lineaDiv");
labelvalorVuelo.setAttribute("class","valor");
}

// window.onload = function () {
//     recorrer();
// }
// class vuelos {
//     constructor(horaSalida, horaLlegada, destino, ubicacion) {
//         this.horaSalida = horaSalida;
//         this.horaLlegada = horaLlegada;
//         this.destino = destino;
//         this.ubicacion = ubicacion;
//     }
// }

// let horaSalida1 = new Date(2022, 03, 18, 10, 15, 0);
// let horaSalida1Srt = horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

// let horaLlegada1 = new Date(2022, 03, 18, 12, 25, 0);
// let horaLlegada1Srt = horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

// let horaSalida2 = new Date(2022, 03, 18, 8, 10, 0);
// let horaSalida2Srt = horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

// let horaLlegada2 = new Date(2022, 03, 18, 10, 20, 0);
// let horaLlegada2Srt = horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

// let destino1 = "ADZ";
// let duracion1 = "Duración 2h 20Min";

// let vuelo = [
//     {
//         "horaSalida" : horaSalida1Srt,
//         "horaLlegada" : horaLlegada1Srt,
//         "destino" : destino1,
//         "duracion" : duracion1
//     },
//     {
//         "horaSalida" : horaSalida2Srt,
//         "horaLlegada" : horaLlegada2Srt,
//         "destino" : destino1,
//         "duracion" : duracion1
//     }  
// ];
// function recorrer() {
//     for(let i = 0; i < Vuelo.length; i++){
//         let horaSalidaVuelo = Vuelo[i].horaSalida;
//         let duracionVuelo = Vuelo[i].duracion;
//         let horaLlegadaVuelo = Vuelo[i].horaLlegada;
//         let destinoVuelo = Vuelo[i].destino;
//         mostrarInfo(horaSalidaVuelo,duracionVuelo,horaLlegadaVuelo,destinoVuelo)
//     }
// }
// function mostrarInfo(horaSalidaVuelo,duracionVuelo,horaLlegadaVuelo,destinoVuelo,infoVuelo,valorVuelo) {
//     let contenedorPrincipal = document.getElementById("main-content");
//     let contenedorInfoVuelos = document.createElement("div");

// let contenedor = document.getElementById("main-content")
//     let contenedor2 = document.createElement("div");
//     contenedor.appendChild(contenedor2);
//     contenedor2.setAttribute("class", "style-content2");

//     let titulo = document.createElement("label");
//     contenedor2.appendChild(titulo);
//     let textotitulo = document.createTextNode("Más economico");
//     titulo.appendChild(textotitulo);
//     titulo.setAttribute("class", "style-titulo");

//     let Salida = document.createElement("label");
//     contenedor2.appendChild(Salida);
//     let textoSalida = document.createTextNode( vuelo[1].horaSalida );
//     Salida.appendChild(textoSalida);
//     Salida.setAttribute("class", "style-salida");

//     let Duracion = document.createElement("label");
//     contenedor2.appendChild(Duracion);
//     let textoDuracion = document.createTextNode(vuelo[1].duracion);
//     Duracion.appendChild(textoDuracion);
//     Duracion.setAttribute("class", "style-duracion");

//     let Llegada = document.createElement("label");
//     contenedor2.appendChild(Llegada);
//     let textoLlegada = document.createTextNode(vuelo[1].horaLlegada );
//     Llegada.appendChild(textoLlegada);
//     Llegada.setAttribute("class", "style-llegada");

//     let Ubicacion = document.createElement("label");
//     contenedor2.appendChild(Ubicacion);
//     let textoUbicacion = document.createTextNode(vuelo[1].ubicacion);
//     Ubicacion.appendChild(textoUbicacion);
//     Ubicacion.setAttribute("class", "style-ubicacion");

//     let Destino = document.createElement("label");
//     contenedor2.appendChild(Destino);
//     let textoDestino = document.createTextNode(vuelo[1].destino);
//     Destino.appendChild(textoDestino);
//     Destino.setAttribute("class", "style-destino");
// }


// // alert("Hora Salida" + vuelo[0].horaSalida + "\n"+ "Hora Llegada" + vuelo[0].horaLlegada + "\n"+ "Destino: " + vuelo[0].destino) ;

