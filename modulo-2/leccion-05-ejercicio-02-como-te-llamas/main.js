"use strict";

//gets html elements
const button = document.querySelector(".btn");
const input = document.querySelector(".input");

//handler
function getLogin () {
  //gets the name written in the input
  const name = input.value;
  return console.log(`Hola, ${name}`);
}

//listener on the html element
button.addEventListener("click", getLogin);