"use strict";

const numbers = [12, 5, 2, 10, 6];

let acc = 0;
let media;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
  media = acc / 2;
}
console.log(`La media de estos números es ${media}.`);
