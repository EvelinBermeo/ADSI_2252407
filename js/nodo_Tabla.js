
function crearTabla() {
    if(validarFormulario == true) {
    let contenedor = document.getElementById("table_js");
    let nodeAddTable = document.createElement("table");

    let nodeAddTr = document.createElement("tr");

    let nodeAddTh = document.createElement("th");
    let nodeAddTh2 = document.createElement("th");
    let nodeAddTh3 = document.createElement("th");
    let nodeAddTh4 = document.createElement("th");
    
    let nodeAddTexto = document.createTextNode("Código");
    let nodeAddTexto2 = document.createTextNode("Descripción");
    let nodeAddTexto3 = document.createTextNode("Valor Unitario");
    let nodeAddTexto4 = document.createTextNode("Unidades en Stock");

    contenedor.appendChild(nodeAddTable);
    nodeAddTable.appendChild(nodeAddTr);
    nodeAddTr.appendChild(nodeAddTh);
    nodeAddTr.appendChild(nodeAddTh2);
    nodeAddTr.appendChild(nodeAddTh3);
    nodeAddTr.appendChild(nodeAddTh4);
    nodeAddTh.appendChild(nodeAddTexto);
    nodeAddTh2.appendChild(nodeAddTexto2);
    nodeAddTh3.appendChild(nodeAddTexto3);
    nodeAddTh4.appendChild(nodeAddTexto4);

    nodeAddTable.setAttribute("class", "table-style");
};
}

function validarFormulario() {
    let codigo = document.getElementById("codigo").value;
    let descripcion = document.getElementById("descripcion").value;
    let Valor = document.getElementById("valorUnitario").value;
    let Stock = document.getElementById("UnidadesStock").value;

    if(codigo == "") {
        alert("Por favor, ingrese el código");
        document.getElementById("codigo").focus();
        return false;
    }
    if(descripcion == "") {
        alert("Por favor, ingrese el código");
        document.getElementById("descripcion").focus();
        return false;
    }
    if(Valor == "") {
        alert("Por favor, ingrese el código");
        document.getElementById("valorUnitario").focus();
        return false;
    }
    if(Stock == "") {
        alert("Por favor, ingrese el código");
        document.getElementById("UnidadesStock").focus();
        return false;
    }
    return  true;
}


