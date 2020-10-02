"use strict";

const dogAge = 15;

if (dogAge === 1) {
  console.log(`Tu perro tiene 15 años humanos.`);
} else if (dogAge === 2) {
  console.log(`Tu perro tiene ${15 + 9} años humanos.`);
} else if (dogAge >= 3) {
  console.log(`Tu perro tiene ${15 + 9 + 5 * (dogAge - 2)} años humanos.`);
}
