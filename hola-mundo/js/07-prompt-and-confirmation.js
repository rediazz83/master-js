"use strict"
console.log("07-prompt-and-confirmation.js");

do {
  var isContinue = true;
  var edad = Number(prompt("¿Que edad tienes?", ""));

  if(isNaN(edad)) {
    alert("Debes ingresar un numero");
    isContinue = confirm("¿Quieres reintentar?");
  } else {
    analizarEdad(edad);
    isContinue = false;
  }
} while(isContinue)
