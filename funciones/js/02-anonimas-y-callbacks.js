"use strict"
console.log("02-anonimas-y-callbacks.js");

//Funcion anonima
var pelicula = function(titulo) {
  return titulo;
}

console.log(pelicula("Avengers: Infinity War"));

/*Callback: es una funcion que se ejecuta dentro de otra. Funcion anonima
que se le pasa como parametro a otra funcion*/
function sumar(...numeros) {
  var resultado = 0;
  for (var i = 0; i < numeros.length; i++) {
    resultado += numeros[i];
  }

  return resultado;
}

console.log(
  sumar(1, 2, 3, 4, 5, 6, 7, 8, 9)
);

function sumarConCallback(primerNumero, segundoNumero, mostrar, multiplicar, mostrarFinal) {
  var suma = primerNumero + segundoNumero;
  mostrar(suma);
  var multiplicacion = multiplicar(suma);
  mostrarFinal(multiplicacion);
}

sumarConCallback(2, 5,
  function(suma) {
    console.log("La suma es: " + suma);
  },
  function(suma) {
    return suma * 2;
  },
  function(multiplicacion) {
    console.log("La suma * 2 es: " + multiplicacion);
  }
);
