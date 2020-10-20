"use strict";

//seleccionamos los 3 options del select: se crea un array
const selectOptions = document.querySelector(".js-select");
//creamos una etiqueta de imagen vacía
const newImage = document.createElement("img");
//seleccionamos el contenedor donde irá la img
const imageContainer = document.querySelector(".js-container");

function addImage(event) {
  //añadimos la img al contenedor
  imageContainer.appendChild(newImage);
  //comprobamos el value del option seleccionado y modificamos la src de la img correspondiente
  if (event.currentTarget.value === "Madrid") {
    newImage.src =
      "https://cdn.petitpalace.com/wp-content/uploads/2017/11/hoteles-petit-palace-en-madrid-max.jpg";
  } else if (event.currentTarget.value === "París") {
    newImage.src =
      "https://img.huffingtonpost.com/asset/5e1d9c4c2100003000af8d0c.jpeg?cache=5aaxY3NirQ&ops=scalefit_720_noupscale";
  } else if (event.currentTarget.value === "Nueva York") {
    newImage.src = "https://neodrinks.com/wp-content/uploads/2019/05/coctelerias-de-nueva-york.jpg";
  }
}

//listener común para los 3 options
selectOptions.addEventListener("change", addImage);

//MEJORA PENDIENTE: modificar el src y en lugar de eso usar setAttribute("src", :/ ruta pc)
