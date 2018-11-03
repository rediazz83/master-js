"use strict"
console.log("01-funciones.js");

haceAlgo(1, 2);
haceAlgo(1, 2, 3);

listadoFrutas("pera", "manzana", "melon", "durazno", "frutilla", "platano");

//Pasando parametro SPREAD: ...frutas
var frutas = ["pera", "manzana", "melon", "durazno", "frutilla", "platano"];
listadoFrutas(...frutas, "pomelo", "naranja");

//Funcion parametro opcional
//parametroOpcional = 0 -> valor por defecto
function haceAlgo(primerNumero, segundoNumero, parametroOpcional = 0) {
  console.log("primerNumero: " + primerNumero);
  console.log("segundoNumero: " + segundoNumero);
  console.log("parametroOpcional:" + parametroOpcional);
}

//Parametros REST
function listadoFrutas(...arregloFrutas) {
  console.log(arregloFrutas);
  for(var i = 0; i < arregloFrutas.length; i++) {
    console.log("Fruta[" + i + "]: " + arregloFrutas[i]);
  }
}
