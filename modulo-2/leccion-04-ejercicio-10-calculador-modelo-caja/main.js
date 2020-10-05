"use strict";

function getBoxModel (bool, width, padding, border) {
  //checks if it has the border-box model
  if (bool === true) {
    // border-box model to content-box
    const contentModelWidth = width + (padding * 2) + (border * 2);
    return `El ancho del contenido es ${width} y el ancho total de la caja es: ${contentModelWidth}`;
  }  else { 
    // content-box to border-box 
  const borderModelWidth = width - (padding * 2) - (border * 2);
  return `El ancho del contenido es ${width} y el ancho total de la caja es: ${borderModelWidth}`;
  }
}

// border-box model to content-box
const boxExample = getBoxModel(true, 30, 1, 1 );
console.log(boxExample);
//returns "El ancho del contenido es 30 y el ancho total de la caja es: 34"

// content-box to border-box 
const boxExample2 = getBoxModel(false, 34, 1, 1 );
console.log(boxExample2);
//returns "El ancho del contenido es 34 y el ancho total de la caja es: 30"
