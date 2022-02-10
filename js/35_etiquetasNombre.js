function obtenerNodeName() {
    let parent = document.getElementById("nombre-nodo");
    let etiqueta = parent.firstChild;
    alert("El contenido del elemento es: " + etiqueta.nodeName);
    let etiqueta2 = parent.firstElementChild;
    alert("El contenido del elemento es: " + etiqueta2);
}