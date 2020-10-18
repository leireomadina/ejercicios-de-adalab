"use strict";

const inputEl = document.querySelector(".input");
const textEl = document.querySelector(".text");

function AddInputText(event) {
  textEl.innerHTML = input.value;
}

inputEl.addEventListener("keyup", AddInputText);

