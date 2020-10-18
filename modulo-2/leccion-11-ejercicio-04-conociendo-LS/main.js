"use strict";

const inputEl = document.querySelector(".js-name");
const paragraphEl = document.querySelector(".js-text");

inputEl.addEventListener("keyup", saveName);

function saveName() {
  const selectedName = inputEl.value;
  console.log(selectedName);
  paragraphEl.innerHTML =  selectedName;
  localStorage.setItem("name", inputEl.value);
  restoreName();
}

const savedName = localStorage.getItem("name");
console.log(savedName);

