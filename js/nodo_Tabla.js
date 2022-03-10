function mostrarTabla(){
    if(validarFormulario() == false) 
    return alert("Completar todas las celdas");

        if(!document.getElementById("body")) crearTabla(); 
        crearCeldas(validarFormulario());
}

let nodeAddTable = document.createElement("table");
let tabla = document.getElementById('table_js');

function crearTabla(){
    tabla.appendChild(nodeAddTable);

    let ToAddTheAd = document.createElement("thead");
    nodeAddTable.appendChild(ToAddTheAd);
    
    let toaddtr = document.createElement("tr");
    ToAddTheAd.appendChild(toaddtr);

    let toAddTh = document.createElement("th");
    let nodeAddTexto = document.createTextNode("Codigo");
    toaddtr.appendChild(toAddTh);
    toAddTh.appendChild(nodeAddTexto);

    let toAddTh2 = document.createElement("th");
    let nodeAddTexto2 = document.createTextNode("Descripcion");
    toaddtr.appendChild(toAddTh2);
    toAddTh2.appendChild(nodeAddTexto2);

    let toAddTh3 = document.createElement("th");
    let nodeAddTexto3 = document.createTextNode("Valor Unitario");
    toaddtr.appendChild(toAddTh3);
    toAddTh3.appendChild(nodeAddTexto3);
    
    let toAddTh4 = document.createElement("th");
    let nodeAddTexto4 = document.createTextNode("Stock Disponible");
    toaddtr.appendChild(toAddTh4);
    toAddTh4.appendChild(nodeAddTexto4);

    toaddtr.setAttribute("class","nombre_encabezado");
    nodeAddTable.setAttribute("class", "table-style");
      
}

function crearCeldas(){
    let ToAddBody = document.createElement("tbody");
    ToAddBody.setAttribute("id","body");

    let ToAddBodyTr = document.createElement("tr");
    nodeAddTable.appendChild(ToAddBody);
    ToAddBody.appendChild(ToAddBodyTr);

    let ToAddTd = document.createElement("td");
    let codigo = document.getElementById("codigo").value;
    let ToAddText = document.createTextNode(codigo);
    ToAddBodyTr.appendChild(ToAddTd);
    ToAddTd.appendChild(ToAddText);

    let ToAddTd2 = document.createElement("td");
    let descripcion = document.getElementById("descripcion").value;
    let ToAddText2 = document.createTextNode(descripcion);
    ToAddBodyTr.appendChild(ToAddTd2);
    ToAddTd2.appendChild(ToAddText2);

    let ToAddTd3 = document.createElement("td");
    let valorunidad = document.getElementById("valorUnitario").value;
    let ToAddText3 = document.createTextNode(valorunidad);
    ToAddBodyTr.appendChild(ToAddTd3);
    ToAddTd3.appendChild(ToAddText3);

    let ToAddTd4 = document.createElement("td");
    let Stock = document.getElementById("UnidadesStock").value;
    let ToAddText4 = document.createTextNode(Stock);
    ToAddBodyTr.appendChild(ToAddTd4);
    ToAddTd4.appendChild(ToAddText4);
 
    Limpiar();
}

function validarFormulario(){
    if(document.getElementById('codigo').value.trim() == ""){
        document.getElementById('codigo').focus();
        return false;
    }
    if(descripcion = document.getElementById('descripcion').value.trim() == ""){
        descripcion = document.getElementById('descripcion').focus;
        return false;
    }
    if(document.getElementById('valorUnitario').value.trim()  == ""){
        document.getElementById('valorUnitario').focus;
        return false;
    }
    if(document.getElementById('UnidadesStock').value.trim() == ""){
        document.getElementById('UnidadesStock').focus;
        return false;
    }
    return true;
}
function Limpiar(){
    var codigo = document.getElementById("codigo").value ="";
    var descripcion = document.getElementById("descripcion").value ="";
    var valorunitario = document.getElementById("valorUnitario").value ="";
    var Stock = document.getElementById("UnidadesStock").value ="";
}
