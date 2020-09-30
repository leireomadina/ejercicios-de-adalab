"use strict";

//selects the h1 element and assigns it to a variable
const titleElement = document.querySelector(".title");
//selects the firts list element and assigns it to a variable
const winnerName = document.querySelector(".item-1");

//adds winnerName to the h1
titleElement.innerHTML = titleElement.innerHTML + " " + winnerName.innerHTML;
