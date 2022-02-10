function obtenerHermanos() {
    let hijosDiv = document.getElementById("hermanos");
    let elemento3 = hijosDiv.childNodes[5];
    let nextHermano = elemento3.nextElementSibling.innerHTML;
    alert(nextHermano);
}
//previoustElementSibling para que salga el siguiente