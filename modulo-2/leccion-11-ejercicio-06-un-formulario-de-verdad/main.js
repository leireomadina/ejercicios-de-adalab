"use strict";

const inputName = document.querySelector(".js-name");
const inputSurname= document.querySelector(".js-surname");
const paragraphEl = document.querySelector(".js-text");

inputName.addEventListener("keyup", saveData);
inputSurname.addEventListener("keyup", saveData);

function saveData() {
  //creamos un objeto para contener los datos del usuario y los asociamos con los values de los inputs
  const userData = {
    name: inputName.value,
    surname: inputSurname.value
  }
  //pintamos los values en un párrafo vacío
  paragraphEl.innerHTML = `${userData.name} ${userData.surname}`;
  //convertimos el objeto en una cadena para poder guardarlo en localStorage
  localStorage.setItem("userData", JSON.stringify(userData));
}

//volvemos a convertir los datos de cadena a objeto para poder recuperarlos con localStorage
const savedData = JSON.parse(localStorage.getItem("userData"));

console.log(savedName);
console.log(savedSurname);


