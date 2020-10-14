"use strict";

const lostNumbers = [4, 8, 15, 16, 23, 42];

function bestLostNumber () {
  const evenNumbers = [];
  const oddNumbers = [];
  for (let i= 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 == 0) {
      evenNumbers.push(lostNumbers[i]);
    } 
  } 

  for (let i= 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 == 0) {
      oddNumbers.push(lostNumbers[i]);
    } 
  } 
  console.log(evenNumbers);
  console.log(oddNumbers);

  const totalNumbers = evenNumbers.concat(oddNumbers);
  console.log(totalNumbers);
  return totalNumbers;
}

bestLostNumber ();
