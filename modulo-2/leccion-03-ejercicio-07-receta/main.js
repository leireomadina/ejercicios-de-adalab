"use strict";

// let ingredient = "Pollo";
let ingredient = "Merluza";
// let ingredient = "Espinacas";

// aquí tu código
switch (ingredient) {
  case "Pollo":
    console.log(`Tu ingrediente es ${ingredient}. Puedes freirte un filete con patatas.`);
    break;
  case "Merluza":
    console.log(`Tu ingrediente es ${ingredient}. Puedes hacerte una merlucita en salsa verde.`);
    break;
  case "Espinacas":
    console.log(`Tu ingrediente es ${ingredient}. Puedes cocinar unas espinacas rehogadas.`);
    break;
  default:
    console.log(`Nada en la nevera.`);
}
