"use strict";

const inputEl = document.querySelector(".input");
const textEl = document.querySelector(".text");

function AddInputText(event) {
  textEl.innerHTML = event.currentTarget.value;
}

inputEl.addEventListener("change", AddInputText);

