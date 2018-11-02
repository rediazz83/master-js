"use strict"
console.log("06-switch.js");

for(var edad = 0; edad < 75; edad++) {
  analizarEdad(edad);
}

function analizarEdad(edad) {
  switch (edad) {
    case 18:
      console.log("Alcanzaste la mayoria de edad");
      break;
    case 40:
      console.log("Estas en la crisis de los 40");
      break;
    case 70:
      console.log("Eres un anciano");
      break;
    default:
      console.log("Fuera de rango");
  }
}
