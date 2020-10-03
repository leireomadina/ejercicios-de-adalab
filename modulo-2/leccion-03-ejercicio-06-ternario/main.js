"use strict";

let avocados;
const avocadoPrice = 1.5;
const money = 33;

//refactoring conditional statement
money >= avocadoPrice ? (avocados = money / avocadoPrice) : (avocados = 0);
console.log(avocados);

// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }
