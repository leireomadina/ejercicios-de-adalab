"use strict";

const pearBasket = {
  maxNumber: 20,
  minNumber: 2,
  actualNumber: 5,
  initialNumber: 3,
};

pearBasket.addPear = function () {
  if (this.actualNumber < this.maxNumber) return (this.actualNumber += 1);
};

console.log(`El número actual de peras es ${pearBasket.addPear()}`);

pearBasket.removePear = function () {
  if (this.actualNumber > this.minNumber) return (this.actualNumber -= 1);
};

console.log(`El número actual de peras es ${pearBasket.removePear()}`);

pearBasket.resetPear = function () {
  return (this.actualNumber = this.initialNumber);
};

console.log(`El número actual de peras es ${pearBasket.resetPear()}`);
console.log(`El número actual de peras es ${pearBasket.addPear()}`);
console.log(`El número actual de peras es ${pearBasket.addPear()}`);
console.log(`El número actual de peras es ${pearBasket.resetPear()}`);
