"use strict";

// debugger;

const buttons = document.querySelectorAll(".btn");
const body = document.querySelector("body");

console.log(buttons);
function changeBackground() {
  body.classList.toggle("alert");
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeBackground);
}
