"use strict";

function get100Numbers () {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
    console.log(numbers);
  }
  return numbers;
}

get100Numbers();


// function get100Numbers () {
//   const numbers = [];
//   for (let i = 1; i <= 100; i++) {
//     numbers[i]= i;
//   }
//   console.log(numbers);
// }

// console.log(get100Numbers());
