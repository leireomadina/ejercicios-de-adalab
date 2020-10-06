"use strict";

//gets html elements
const button = document.querySelector(".btn");
const text = document.querySelector(".text");

//handler
function changeText () {
  text.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
}

//listener on the html element
button.addEventListener("click", changeText);