function mostrarImagen() {
    alert("Hola");
}
function volverInvisible(){
    document.getElementById("imagen2").className = "img_invisible"
}
//function retornarImagen() {
//   document.getElementById("second-movie").src = "img/misterioAncho.jfif"
//}
function cambiarImagen() {
   let nueva = document.getElementById("second-movie").src = "img/violetAncho.jfif";
    nueva.src = "img/misterioAncho";
    
}
