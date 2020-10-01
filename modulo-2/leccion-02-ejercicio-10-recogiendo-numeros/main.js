"use strict";

const myAgeString = document.querySelector(".age");
console.log(myAgeString.innerHTML); // returns 32
//from string to number
const myAge = parseInt(myAgeString.innerHTML);
const dayHours = 24;
const yearDays = 365;
const totalHours = myAge * (dayHours * yearDays);

console.log(`He vivido en total ${totalHours} horas.`)
