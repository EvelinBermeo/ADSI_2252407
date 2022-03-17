class vuelos {
    constructor(horaSalida, horaLlegada, destino, ubicacion) {
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.destino = destino;
        this.ubicacion = ubicacion;
    }
}

let horaSalida1 = new Date(2022, 03, 18, 10, 15, 0);
let horaSalida1Srt = horaSalida1.getHours().toString() + ":" + horaSalida1.getMinutes().toString();

let horaLlegada1 = new Date(2022, 03, 18, 12, 25, 0);
let horaLlegada1Srt = horaLlegada1.getHours().toString() + ":" + horaLlegada1.getMinutes().toString();

let horaSalida2 = new Date(2022, 03, 18, 8, 10, 0);
let horaSalida2Srt = horaSalida2.getHours().toString() + ":" + horaSalida2.getMinutes().toString();

let horaLlegada2 = new Date(2022, 03, 18, 10, 20, 0);
let horaLlegada2Srt = horaLlegada2.getHours().toString() + ":" + horaLlegada2.getMinutes().toString();

let destino1 = "ADZ";
let duracion1 = "Duración 2h 20Min";

let vuelo = [
    {
        "horaSalida" : horaSalida1Srt,
        "horaLlegada" : horaLlegada1Srt,
        "destino" : destino1,
        "duracion" : duracion1
    },
    {
        "horaSalida" : horaSalida2Srt,
        "horaLlegada" : horaLlegada2Srt,
        "destino" : destino1,
        "duracion" : duracion1
    }  
];
function mostrarInfo(){
let contenedor = document.getElementById("main-content")
    let contenedor2 = document.createElement("div");
    contenedor.appendChild(contenedor2);
    contenedor2.setAttribute("class", "style-content2");

    let titulo = document.createElement("label");
    contenedor2.appendChild(titulo);
    let textotitulo = document.createTextNode("Más economico");
    titulo.appendChild(textotitulo);
    titulo.setAttribute("class", "style-titulo");

    let Salida = document.createElement("label");
    contenedor2.appendChild(Salida);
    let textoSalida = document.createTextNode( vuelo[1].horaSalida );
    Salida.appendChild(textoSalida);
    Salida.setAttribute("class", "style-salida");

    let Duracion = document.createElement("label");
    contenedor2.appendChild(Duracion);
    let textoDuracion = document.createTextNode(vuelo[1].duracion);
    Duracion.appendChild(textoDuracion);
    Duracion.setAttribute("class", "style-duracion");

    let Llegada = document.createElement("label");
    contenedor2.appendChild(Llegada);
    let textoLlegada = document.createTextNode(vuelo[1].horaLlegada );
    Llegada.appendChild(textoLlegada);
    Llegada.setAttribute("class", "style-llegada");

    // let Ubicacion = document.createElement("label");
    // contenedor2.appendChild(Ubicacion);
    // let textoUbicacion = document.createTextNode(vuelo[1].ubicacion);
    // Ubicacion.appendChild(textoUbicacion);
    // Ubicacion.setAttribute("class", "style-ubicacion");

    // let Destino = document.createElement("label");
    // contenedor2.appendChild(Destino);
    // let textoDestino = document.createTextNode(vuelo[1].destino);
    // Destino.appendChild(textoDestino);
    // Destino.setAttribute("class", "style-destino");
}


alert("Hora Salida" + vuelo[0].horaSalida + "\n"+ "Hora Llegada" + vuelo[0].horaLlegada + "\n"+ "Destino: " + vuelo[0].destino) ;

