"use strict";

//seleccionamos los 3 options del select
const selectOptions = document.querySelector(".js-select");
//seleccionamos los 3 inputs del form
// const input = document.querySelector(".js-input")
const inputName = document.querySelector(".js-name");
const inputsurName = document.querySelector(".js-surname");
const inputPhone = document.querySelector(".js-tel");

//array con 3 objetos que contiene los datos de los usuarios
const data = [
  {
    name: "Dana",
    surname: "Scully",
    phone: "652367859"
  },
  {
    name: "Fox",
    surname: "Mulder",
    phone: "965285519"
  },
  {
    name: "Walter",
    surname: "Skinner",
    phone: "635966641"
  }
]

function addUser (event) {
  if (event.currentTarget.value === "Scully") {
    inputName.value = data[0].name;
    inputsurName.value = data[0].surname;
    inputPhone.value = data[0].phone;
  } else if (event.currentTarget.value === "Mulder") {
    inputName.value = data[1].name;
    inputsurName.value = data[1].surname;
    inputPhone.value = data[1].phone;
  } else if (event.currentTarget.value === "Skinner") {
    inputName.value = data[2].name;
    inputsurName.value = data[2].surname;
    inputPhone.value = data[2].phone;
  }
}
//listener común para los 3 options del select
selectOptions.addEventListener("change", addUser);
