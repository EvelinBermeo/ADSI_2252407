var fechaNacimiento = new Date("July 5, 2003");
var fechaFutura = new Date("July 4, 2040");
//Obtener años
var anyoFechaNacimiento = fechaNacimiento.getFullYear();
var anyoFechaFutura = fechaFutura.getFullYear();
var mesFechaNacimiento = fechaNacimiento.getMonth();
var mesFechaFutura = fechaFutura.getMonth();
var diaFechaNacimiento = fechaNacimiento.getDate();
var diaFechaFutura = fechaFutura.getDate();
var edad = 0;

calcular();

function calcular(){

    edad =  anyoFechaFutura -  anyoFechaNacimiento;
    if(anyoFechaNacimiento < anyoFechaFutura) {
        if(mesFechaFutura < mesFechaNacimiento  ) {
            /* ...*/
        }
        else  if (mesFechaNacimiento === mesFechaFutura) {
            if(diaFechaFutura <= diaFechaNacimiento ){
            /* ...*/
            }
        }
        else (edad = edad - 1)
    ;
        }
        else if (anyoFechaNacimiento === anyoFechaFutura){
            console.log("Edad: 0 años");
        }
        else {
            console.log("Los datos ingresados son incorrectos. Verifique por favor...")
        }
            
    console.log("Edad: " + edad + " años");
    };