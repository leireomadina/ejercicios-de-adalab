"use strict";

const body = document.querySelector(".js-body");
//seleccionamos los dos inputs a la vez (light y dark)
const radioOptions = document.querySelectorAll(".js-radio");

//añadimos un bucle para añadir un listener común a las dos opciones: se crea un array
for (const option of radioOptions) {
  option.addEventListener("change", changeTheme);
}

function changeTheme(event) {
  //asociamos el value de cada input seleccionado a una constante usando el parámetro event
  const selectedOption = event.currentTarget.value;
  //si se selecciona el primer botón (light):
  if (selectedOption === "light") {
    body.classList.remove("dark");
    body.classList.add("light");
    //guardamos el value actual del radio (light) en el localStorage
    localStorage.setItem("theme", event.currentTarget.value);
    //si se selecciona el segundo botón (dark):
  } else if (selectedOption === "dark") {
    body.classList.remove("light");
    body.classList.add("dark");
    //guardamos el value actual del radio (dark) en el localStorage
    localStorage.setItem("theme", event.currentTarget.value);
  }
}

//hay que sacar los localStorage fuera de la función para que se guarden los temas al refrescar/cerrar la página
