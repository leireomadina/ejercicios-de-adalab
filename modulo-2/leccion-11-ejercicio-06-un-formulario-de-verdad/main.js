"use strict";

const inputName = document.querySelector(".js-name");
const inputSurname= document.querySelector(".js-surname");
const paragraphEl = document.querySelector(".js-text");
const paragraphEl2 = document.querySelector(".js-text-2");

inputName.addEventListener("keyup", saveName);
inputSurname.addEventListener("keyup", saveName);

const data = {
  name: "",
  surname: ""
}

function saveName() {
  const selectedName = inputName.value;
  console.log(selectedName);
  paragraphEl.innerHTML =  selectedName;
  const selectedSurname = inputSurname.value;
  console.log(selectedSurname);
  paragraphEl2.innerHTML =  selectedSurname;

  localStorage.setItem("name", inputName.value);
  localStorage.setItem("surname", inputSurname.value);
  // restoreName();
}

const savedName = localStorage.getItem("name");
const savedSurname = localStorage.getItem("surname");
console.log(savedName);
console.log(savedSurname);


