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

let auto1 = new Automovil("Toyota","4Runner",2018,"img/Toyota4runner.jpg", 245000000, 81700, "Medellín");
let auto2 = new Automovil("Toyota","Prado 3.0 Tx",2011, "img/ToyotaPrado.jpg",133000000 ,176000, "Bogotá");

/* mostrarInformacion(auto1);*/

function mostrarVehiculo(auto) {
    let contenedor = document.getElementById("main-content")
    let contenedorImg = document.createElement("div");
    contenedor.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class" , "img-style");
    contenedorImg.appendChild(imgAuto);

    let modeloAuto = document.createElement("label");
    let textomodeloAuto = document.createTextNode(auto.marca + " " + auto.modelo);
    modeloAuto.appendChild(textomodeloAuto);
    modeloAuto.setAttribute("class", "style-modelo");
    contenedorImg.appendChild(modeloAuto);

    let valorAuto = document.createElement("label");
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.valor);
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let anyoAuto = document.createElement("label");
    let textoanyoAuto = document.createTextNode(auto.anyo);
    anyoAuto.appendChild(textoanyoAuto);

    let kilometrajeAuto = document.createElement("label");
    let textokilometrajeAuto = document.createTextNode(auto.anyo + " " + auto.ciudad + " - " + auto.kilometraje + "km");
    kilometrajeAuto.appendChild(textokilometrajeAuto);
    kilometrajeAuto.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeAuto);

    anyoVehiculo.setAttribute("class", "style-anyo");


}

// //Esto es temporal
// function mostrarInfo() {
//     mostrarInformacion(auto1);
// }
window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("busqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Toyota") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
        }
        else if (busqueda == "Toyota Corolla") {
            mostrarVehiculo(auto1);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}





