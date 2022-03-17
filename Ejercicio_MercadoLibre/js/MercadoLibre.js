class Automovil {
    constructor(marca, modelo, anyo, imagen, valor) {
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.imagen = imagen;
        this.valor = valor;
        
    }
}

let auto1 = new Automovil("Mazda","3",2019,"img/mazdawebp.jpg", 82300000);
/* let auto2 = new Automovil("Mazda" + "3" +2028, "img", 40000); */

/* mostrarInformacion(auto1);*/

function mostrarInformacion(auto) {
    let contenedor = document.getElementById("main-content")
    let contenedorImg = document.createElement("div");
    contenedor.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg")
  
    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class" , "img-style");
    contenedorImg.appendChild(imgAuto);

     let nodeAddLabel = document.createElement("label");
    contenedorImg.appendChild(nodeAddLabel);
    let txtMarca = document.createTextNode(auto.marca);
    nodeAddLabel.appendChild(txtMarca);  
   
} 

//Esto es temporal
function mostrarInfo() {
    mostrarInformacion(auto1);
}





