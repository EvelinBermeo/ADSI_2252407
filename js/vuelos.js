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

// // alert("Hora Salida" + vuelo[0].horaSalida + "\n"+ "Hora Llegada" + vuelo[0].horaLlegada + "\n"+ "Destino: " + vuelo[0].destino) ;

