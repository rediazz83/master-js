"use strict"
console.log("05-tipos-de-datos.js");

//Solo tomé algunos apuntes de esta clase...

//Parseando tipos de datos
var numero = "35.5";
var suma = numero + 7;
console.log("Suma es: " + suma); //Muestra 35.57

//Funcion Number: Maneja todo tipo de valores: enteros, en coma flotante, etc
suma = Number(numero) + 7
console.log("Suma es: (Number) " + suma); //Muestra 42.5

//Funciones parseInt y parseFloat son más especificas
suma = parseInt(numero) + 7
console.log("Suma es: (parseInt) " + suma); //Muestra 42

suma = parseFloat(numero) + 7
console.log("Suma es: (parseFloat) " + suma); //Muestra 42.5

var aString = String(suma) + 8;
console.log("Volvemos la suma a texto " + aString); //Muestra 42.58
