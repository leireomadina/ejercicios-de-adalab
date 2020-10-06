"use strict";

const btn = document.querySelector(".btn");

function changeBgColor() {
  btn.classList.toggle("btn--blue");
}

btn.addEventListener("click", changeBgColor);
