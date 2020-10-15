"use strict";

//get html element
const face = document.querySelector(".js-face");
const btn = document.querySelector(".js-button");
const select = document.querySelector(".js-select");
const container = document.querySelector(".js-container");

//handler that updates the face
function updateClick() {
  const selectValue = select.value;
  face.innerHTML = selectValue;

  const random = getRandom();
  console.log(random);
  if (random % 2 === 1) {
    // console.log("impar");
    container.classList.add("fire-color");
  } else {
    // console.log("par");
    container.classList.remove("fire-color");
  }
}

//to get a random number
const getRandom = function () {
  const random = Math.round(Math.random() * 100);
  //another way:
  // const random = parseInt(Math.random() * 100);
  // console.log(random);
  return random;
};

//listener
container.addEventListener("click", updateClick);
