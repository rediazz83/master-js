"use strict"
console.log("01-funciones.js");

haceAlgo(1, 2);
haceAlgo(1, 2, 3);

//Funcion parametro opcional
//parametroOpcional = 0 -> valor por defecto
function haceAlgo(primerNumero, segundoNumero, parametroOpcional = 0) {
  console.log("primerNumero: " + primerNumero);
  console.log("segundoNumero: " + segundoNumero);
  console.log("parametroOpcional:" + parametroOpcional);
}
