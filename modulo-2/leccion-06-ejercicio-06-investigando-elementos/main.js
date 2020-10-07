"use strict";

const inputEl = document.querySelector(".js-input");

function getInputValue(event) {
  console.log(event.currentTarget.value);
}

console.log(inputEl);
console.dir(inputEl);
console.dir(inputEl.value);

inputEl.addEventListener("change", getInputValue);
