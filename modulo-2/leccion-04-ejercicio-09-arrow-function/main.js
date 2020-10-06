"use strict";

//arrow function 1
const multiplication = (num1, num2) => num1 * num2;

const multiplicationResult = multiplication(3, 5);
console.log(multiplicationResult);

//arrow function 2
const getMedia = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) / 2;

const getMediaResult = getMedia(3, 5, 2, 4);
console.log(getMediaResult);

//arrow function 3
const getPrice = num => {
  const getIva = (num * 21) / 100;
  const totalPrice = num + getIva;
  return `Precio sin IVA: ${num} €, IVA: ${getIva} € y Total: ${totalPrice} €`;
}

const getTicket = getPrice(10);
console.log(getTicket);

//arrow function 4
const getEvenNumber = num => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const givenNumber = getEvenNumber(6);
console.log(givenNumber);

//arrow function 5
const getEl = selector => document.querySelector(selector);


