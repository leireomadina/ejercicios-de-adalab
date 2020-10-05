"use strict";

function getEvenNumber(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const givenNumber = getEvenNumber(6);
console.log(givenNumber);
//returns true
