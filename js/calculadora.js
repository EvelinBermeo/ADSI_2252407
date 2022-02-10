var valor_digitado="";
    var dato1="";
    var dato2="";
    var operacion="";

    function asignar_uno(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+1;
    }
    function asignar_dos(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+2;
    }
    function asignar_tres(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+3;
    }
    function asignar_cuatro(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+4;
    }
    function asignar_cinco(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+5;
    }
    function asignar_seis(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+6;
    }
    function asignar_siete(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+7;
    }
    function asignar_ocho(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+8;
    }
    function asignar_nueve(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+9;
    }
    function asignar_cero(){
        valor_digitado=document.getElementById('pantalla').value;
        document.getElementById('pantalla').value=valor_digitado+0;
    }

    function asignar_suma(){
        dato1=document.getElementById('pantalla').value;
        valor_digitado="";
        document.getElementById('pantalla').value='';
        operacion="suma";
    }
    function asignar_resta(){
        dato1=document.getElementById('pantalla').value;
        valor_digitado="";
        document.getElementById('pantalla').value='';
        operacion="resta";
    }
    function asignar_multi(){
        dato1=document.getElementById('pantalla').value;
        valor_digitado="";
        document.getElementById('pantalla').value='';
        operacion="multiplicacion";
    }
    function asignar_division(){
        dato1=document.getElementById('pantalla').value;
        valor_digitado="";
        document.getElementById('pantalla').value='';
        operacion="division";
    }

    function asignar_igual(){
        dato2= document.getElementById('pantalla').value;
        if(operacion=="suma"){
            document.getElementById('pantalla').value=parseFloat(dato1)+parseFloat(dato2);
        }
        if(operacion=="resta"){
            document.getElementById('pantalla').value=parseFloat(dato1)-parseFloat(dato2);
        }
        if(operacion=="multiplicacion"){
            document.getElementById('pantalla').value=parseFloat(dato1)*parseFloat(dato2);
        }
        if(operacion=="division"){
            document.getElementById('pantalla').value=parseFloat(dato1)/parseFloat(dato2);
        }
    }

    function asignar_reset(){
        dato1=0;
        dato2=0;
        document.getElementById('pantalla').value='';
    }
