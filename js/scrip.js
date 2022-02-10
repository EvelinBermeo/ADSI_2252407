$(document).ready(main);

var contador = 1;

function main() {
    $('.menu-box-invisible').click(function(){
        if (contador == 1) {
            $('.menu-box').animate ({
                left: '0'
            });
            contador = 0;
        }
        else {
            contador = 1;
            $('.menu-box ').animate ({
                left: '-100%'
            });
        }
    });
 
}

function mostrarMenu(){
    var navMostrar = document.getElementById("menu-principal");
    navMostrar.classList.toggle('mostrarNav');
}