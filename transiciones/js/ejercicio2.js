const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", mostrar);

function mostrar() {
    document.getElementById("idHeader").innerHTML = "";
    llamarNuevaVentame();
}
function llamarNuevaVentame(){
    let iconoLupa = document.createElement("i");
    let contenedor = document.getElementById("idHeader");
    contenedor.appendChild(iconoLupa);
    iconoLupa.setAttribute("class", "fa fa-search fa-lg lupa")
}