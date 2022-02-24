// let nuevoNombre = "Manuela";
// let nombreAntiguo = "Evelin";
// function mostrarNuevoNombre() {
//     document.getElementById("mostrarNombre").innerHTML = nuevoNombre;
// }
// function mostrarNombreAntiguo() {
//     let nombreInterfaz = document.getElementById("mostrarNombre").innerHTML;
//     if (nombreInterfaz === nombreAntiguo) {
//         alert("El nombre ha sido cambiado con éxito");
//     }
//     else {
//         document.getElementById("mostrarNombre").innerHTML = nombreAntiguo;
//         alert("El nombre actual es el nombre inicial")
//     }
// }
let inicio = 0;
let cantidad = "";

function aumentar(){
    if( inicio <= 9) {
        cantidad = document.getElementById('cantidad').value = ++inicio;
        document.getElementById("total").innerHTML = cantidad;
    }
    calcularTotal();
}
 
function disminuir() {
    if(inicio >= 1) {
        cantidad = document.getElementById('cantidad').value = --inicio;
    }
}
function calcularTotal() {
    let valorUnidad = document.getElementById("valorUnitario").innerHTML;
    let cantidadElementos = document.getElementById("total").innerHTML;
    let valorCompra = valorUnidad * cantidadElementos;
    document.getElementById("multiplicar").innerHTML = valorCompra;
}