class Automovil {
    constructor(marca, modelo, anyo, imagen, valor, kilometraje, ciudad) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.imagen = imagen;
        this.valor = valor;
        this.kilometraje = kilometraje;
        this.ciudad = ciudad;
    }
}

let auto1 = new Automovil("Toyota",   "4Runner",     2018, "img/Toyota4runner.jpg", 245000000,  81700,  "Medellín");
let auto2 = new Automovil("Toyota",   "Land Cruiser",2008, "img/ToyotaPrado.jpg",   118000000 , 176000, "Bogotá");
let auto3 = new Automovil("Toyota",   "Prado 3.0 Tx",2011, "img/LandCruiser.jpg",   133000000 , 104000, "Cali");
let auto4 = new Automovil("Chevrolet",  "Spark",2017, "img/chevrolet.jpg",   34500000 , 65, "Cali");
let auto5 = new Automovil("Chevrolet",  "Spark",2017, "img/chevrolet.jpg",   34500000 , 65, "Cali");


function mostrarAuto(auto) {
    let contenedor = document.getElementById("main-content")
    let contenedorImg = document.createElement("div");
    contenedor.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class" , "img-style");
    contenedorImg.appendChild(imgAuto);

    let modeloAuto = document.createElement("label");
    let textomodeloAuto = document.createTextNode(auto.marca + " " + auto.modelo + " - " + auto.ciudad );
    modeloAuto.appendChild(textomodeloAuto);
    modeloAuto.setAttribute("class", "style-modelo");
    contenedorImg.appendChild(modeloAuto);

    let valorAuto = document.createElement("label");
    let precio = new Intl.NumberFormat('es-ES', {}).format(auto.valor);
    let textoValorAuto = document.createTextNode("$" + precio);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let anyoAuto = document.createElement("label");
    let textoanyoAuto = document.createTextNode(auto.anyo);
    anyoAuto.appendChild(textoanyoAuto);

    let kilometrajeAuto = document.createElement("label");
    let textokilometrajeAuto = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "km");
    kilometrajeAuto.appendChild(textokilometrajeAuto);
    kilometrajeAuto.setAttribute("class", "style-kilometros");
    contenedorImg.appendChild(kilometrajeAuto);

    anyoAuto.setAttribute("class", "style-anyo");


}


window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("buscando").value;
    if(event.key == "Enter") {
        limpiar();
        if (busqueda == "Toyota") {
            mostrarAuto(auto1);
            mostrarAuto(auto2);
            mostrarAuto(auto3);
        }
        else if (busqueda == "Chevrolet") {
            mostrarAuto(auto4);
            mostrarAuto(auto5);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});


function limpiar() {
    document.getElementById("main-content").innerHTML = "";
}







