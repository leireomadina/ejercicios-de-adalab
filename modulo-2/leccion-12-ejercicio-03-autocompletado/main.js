"use strict";

//seleccionamos los 3 options del select
const selectOptions = document.querySelector(".js-select");
//seleccionamos los 3 inputs del form a la vez: se crea un array
const input = document.querySelectorAll(".js-input");
// const inputName = document.querySelector(".js-name");
// const inputsurName = document.querySelector(".js-surname");
// const inputPhone = document.querySelector(".js-tel");

//array con 3 objetos que contiene los datos de los usuarios
const data = [
  {
    name: "Dana",
    surname: "Scully",
    phone: "652367859",
  },
  {
    name: "Fox",
    surname: "Mulder",
    phone: "965285519",
  },
  {
    name: "Walter",
    surname: "Skinner",
    phone: "635966641",
  },
];

function addUser(event) {
  //bucle para recorrer el objeto data: futura mejora para recorrer los datos del objeto automáticamente
  //for (let i = 0; i < data.length; i++) {}
  if (event.currentTarget.value === "Scully") {
    input[0].value = data[0].name;
    input[1].value = data[0].surname;
    input[2].value = data[0].phone;
  } else if (event.currentTarget.value === "Mulder") {
    input[0].value = data[1].name;
    input[1].value = data[1].surname;
    input[2].value = data[1].phone;
  } else if (event.currentTarget.value === "Skinner") {
    input[0].value = data[2].name;
    input[1].value = data[2].surname;
    input[2].value = data[2].phone;
  }
}

//listener común para los 3 options del select
selectOptions.addEventListener("change", addUser);
