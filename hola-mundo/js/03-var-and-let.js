"use strict"
console.log("03-var-and-let.js");

/*Ejemplo sin el uso de let: acá tenemos dos variables, una global y una local.
Usando definiendo ambas con la palabra reservada 'var', el programa las tratará
como una sola variable

Para los argentinos la palabra saludar es usada
tanto para decir hola como para decir adios*/
console.log("Ejemplo sin el uso de let");

var saludoArgentino = "hola";
console.log(saludoArgentino); //valor: adios
if(true) {
  var saludoArgentino = "adios";
  console.log(saludoArgentino); //valor: adios
}
console.log(saludoArgentino); //valor: adios

/*Ejemplo usando let: usando 'let', el programa diferencia las variables
dependiendo del ambito en que estén definidas*/
console.log("Ejemplo usando let");
var coso = "algun coso";
console.log(coso); //valor: algun coso
if(true) {
  let coso = "otro coso";
  console.log(coso); //valor: otro coso
}
console.log(coso); //valor: algun coso
