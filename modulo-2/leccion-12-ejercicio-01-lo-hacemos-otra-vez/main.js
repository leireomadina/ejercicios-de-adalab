"use strict";

//array con 3 elementos
const numbers = [1, 2, 3];

//seleccionamos la lista ul vacío
const numbersList = document.querySelector(".js-list");

//recorremos el array para extraer los datos
for (let i=0; i < numbers.length; i++) {
  //creamos un li vacío dentro de la ul por cada iteración
  const newListItem = document.createElement("li");
  //creamos el contenido interior de cada li
  const listInnerContent = document.createTextNode(numbers[i]);
  //añadimos a cada li dicho contenido
  newListItem.appendChild(listInnerContent);
  //añadimos cada li a la lista ul
  numbersList.appendChild(newListItem);
}
