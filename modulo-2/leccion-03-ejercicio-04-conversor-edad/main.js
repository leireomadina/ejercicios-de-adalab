"use strict";

const dogYears1 = 15;
const dogYears2 = 9;
const dogYears3 = 5;
const dogAge = 13;

// if (dogAge === 1) {
//   console.log(`Tu perro tiene 15 años humanos.`);
// } else if (dogAge === 2) {
//   console.log(`Tu perro tiene ${15 + 9} años humanos.`);
// } else if (dogAge >= 3) {
//   console.log(`Tu perro tiene ${15 + 9 + 5 * (dogAge - 2)} años humanos.`);
// }

//improvement:

if (dogAge === 1) {
  console.log(`Tu perro tiene 15 años humanos.`);
} else if (dogAge === 2) {
  console.log(`Tu perro tiene ${dogYears1 + dogYears2} años humanos.`);
} else {
  console.log(`Tu perro tiene ${dogYears1 + dogYears2 + dogYears3 * (dogAge - 2)} años humanos.`);
}
