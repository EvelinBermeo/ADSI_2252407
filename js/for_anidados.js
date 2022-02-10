//Mostrar los elementos de un arreglo a traves de un for
aprendices = ["David", "Andrea", "Daniela", "Alejandro"]
for(i = 0; i <= 3; i++) {
    console.log("Aprendiz N. " + (i + 1) + ": " + aprendices[i]);
}

//Cargar información a un arreglo a traves de for
var producto1 = new Array();
var producto2 = new Array();
var producto3 = new Array();
var productos = new Array();
for(var i = 0; i <=2; i++){
    alert("Ingrese el registro N. " + (i + 1));
    if (i === 0){
        for(var j=0; j < 4; j++) {
            producto1[j] = prompt("Producto N: " + (i + 1) + "_" + (j + 1) + ": " );
        }
        productos[i] = new Array(producto1);
    }
    if (i === 1){
        for(var j=0; j < 4; j++) {
            producto2[j] = prompt("Producto N: " + (i + 1) + "_" + (j + 1) + ": " );
        }
        productos[i] = new Array(producto1);
    }
    if (i === 2){
        for(var j=0; j < 4; j++) {
            producto3[j] = prompt("Producto N: " + (i + 1) + "_" + (j + 1) + ": " );
        }
        productos[i] = new Array(producto1);
    }
    console.log("Los productos son" + "\n" + producto1 + "\n" + producto2 + "\n" + producto3)

}

