"use strict";

const titleElement = document.querySelector(".title");
const textElement = document.querySelector(".text");
const notificationSection = document.querySelector(".notification-container");

if (notificationSection.classList.contains("warning")) {
  titleElement.innerHTML = "AVISO";
  textElement.innerHTML = "Tenga cuidado.";
} else if (notificationSection.classList.contains("error")) {
  titleElement.innerHTML = "ERROR";
  textElement.innerHTML = "Ha surgido un error.";
} else if (notificationSection.classList.contains("success")) {
  titleElement.innerHTML = "CORRECTO";
  textElement.innerHTML = "Los datos son correctos.";
} else {
  //valores por defecto en html
  titleElement.innerHTML;
  textElement.innerHTML;
}
