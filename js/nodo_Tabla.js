function mostrarTabla(){
    if(validarFormulario() == false) return alert("Completa todas las celdas");
        if(!document.getElementById("body")) crearTabla(); 
        crearCeldas(validarFormulario());
}

var nodeAddTable = document.createElement("table");
var tabla = document.getElementById('table_js');

function crearTabla(){
    tabla.appendChild(nodeAddTable);

    let theAd = document.createElement("thead");
    nodeAddTable.appendChild(theAd);
    
    let toaddtr = document.createElement("tr");
    theAd.appendChild(toaddtr);

    let toAddTh = document.createElement("th");
    let contenidotext1 = document.createTextNode("Codigo");
    toaddtr.appendChild(toAddTh);
    toAddTh.appendChild(contenidotext1);

    let toAddTh2 = document.createElement("th");
    let contenidotext2 = document.createTextNode("Descripcion");
    toaddtr.appendChild(toAddTh2);
    toAddTh2.appendChild(contenidotext2);

    let toAddTh3 = document.createElement("th");
    let contenidotext3 = document.createTextNode("Valor Unitario");
    toaddtr.appendChild(toAddTh3);
    toAddTh3.appendChild(contenidotext3);
    
    let toAddTh4 = document.createElement("th");
    let contenidotext4 = document.createTextNode("Stock Disponible");
    toaddtr.appendChild(toAddTh4);
    toAddTh4.appendChild(contenidotext4);

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


// function crearTabla() {
//     if(validarFormulario == true) {

//     let contenedor = document.getElementById("table_js");
//     let nodeAddTable = document.createElement("table");
//     contenedor.appendChild(nodeAddTable);
    
//     let nodeAddTr = document.createElement("tr");
//     nodeAddTable.appendChild(nodeAddTr);

//     let nodeAddTh = document.createElement("th");
//     let nodeAddTexto = document.createTextNode("Código");
//     nodeAddTr.appendChild(nodeAddTh);

//      let nodeAddTh2 = document.createElement("th");
//      let nodeAddTexto2 = document.createTextNode("Descripción");
//      nodeAddTh.appendChild(nodeAddTexto);
//      nodeAddTr.appendChild(nodeAddTh2);
//      nodeAddTh2.appendChild(nodeAddTexto2);

//      let nodeAddTh3 = document.createElement("th");
//      let nodeAddTexto3 = document.createTextNode("Valor Unitario");
//      nodeAddTr.appendChild(nodeAddTh3);
//      nodeAddTh3.appendChild(nodeAddTexto3);

//      let nodeAddTh4 = document.createElement("th");
//      let nodeAddTexto4 = document.createTextNode("Unidades en Stock");
//      nodeAddTr.appendChild(nodeAddTh4);
//      nodeAddTh4.appendChild(nodeAddTexto4);
 
//     nodeAddTable.setAttribute("class", "table-style");
// };
// }
// function validarFormulario() {
//     let codigo = document.getElementById("codigo");
//     let descripcion = document.getElementById("descripcion");
//     let Valor = document.getElementById("valorUnitario");
//     let Stock = document.getElementById("UnidadesStock");

//     if(codigo == "") {
//         alert("Por favor, ingrese el código");
//         document.getElementById("codigo").focus();
//         return false;
//     }
//     if(descripcion == "") {
//         alert("Por favor, ingrese el código");
//         document.getElementById("descripcion").focus();
//         return false;
//     }
//     if(Valor == "") {
//         alert("Por favor, ingrese el código");
//         document.getElementById("valorUnitario").focus();
//         return false;
//     }
//     if(Stock == "") {
//         alert("Por favor, ingrese el código");
//         document.getElementById("UnidadesStock").focus();
//         return false;
//     }
//     return  true;
// };


