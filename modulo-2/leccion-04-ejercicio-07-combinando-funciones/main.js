"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  if (element === null) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
  } else return element;
}

function getEvenNumber(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const paragraphEl = getEl(".number").innerHTML;
console.log(paragraphEl);
//returns 4

//to convert a number value into a string
const convertString = parseInt(paragraphEl);
console.log(convertString);
// returns 4
console.log(typeof paragraphEl);
// returns string

const givenNumber = getEvenNumber(convertString);
console.log(givenNumber);
//returns true

if (givenNumber === true) {
  console.log(`El número ${convertString} es PAR.`);
} else {
  console.log(`El número ${convertString} es IMPAR.`);
}

//returns "El número 4 es PAR."
