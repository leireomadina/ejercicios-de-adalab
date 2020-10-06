"use strict";

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");


function changeBgColor(event) {
  const selectedBtn = event.currentTarget;
  selectedBtn.classList.toggle("btn--selected");
}

btn1.addEventListener("click", changeBgColor);
btn2.addEventListener("click", changeBgColor);

