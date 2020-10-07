"use strict";

const inception = "Inception";
const theButterFlyEffect = "The butterfly effect";
const eternalSunshineOfTheSM = "Eternal sunshine of the spotless mind";
const blueVelvet = "Blue velvet";
const split = "Split";
const btn = document.querySelector(".js-btn");
const listItems = document.querySelector(".js-list");

function showFilms() {
  listItems.innerHTML = `<li>${inception}</li><li>${theButterFlyEffect}</li><li>${eternalSunshineOfTheSM}</li><li>${blueVelvet}</li><li>${split}</li>`;
}

function showConsole(event) {
  const selectedFilm = event.target.innerHTML;
  console.log(selectedFilm);
}

btn.addEventListener("click", showFilms);
listItems.addEventListener("click", showConsole);
