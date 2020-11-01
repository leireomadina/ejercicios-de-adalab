"use strict";

import Square from "./02-square.js";
import Triangle from "./03-triangle.js";

//creamos una instancia para la clase Square y otra para la clase Triangle y les pasamos como parámetros los datos dados por el ejercicio
const mySquare = new Square(4);
const myTriangle = new Triangle(4, 3);

//creamos una función para renderizar el perímetro de las instancias
function renderPerimeter(object) {
  console.log(object.perimeter());
}

//creamos otra función para renderizar el área
function renderArea(object) {
  console.log(object.area());
}

renderPerimeter(mySquare);
renderArea(mySquare);
renderArea(myTriangle);