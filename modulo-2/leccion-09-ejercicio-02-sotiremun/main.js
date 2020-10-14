"use strict";

function get100Numbers () {
  let numbers = [];
  for (let i = 1; i <= 100; i++) {
    numbers.push(i);
  }
  return numbers;
}

get100Numbers();


function getReversed100Numbers () {
  const reverseNumbers =  get100Numbers().reverse();
  console.log(reverseNumbers);
}

getReversed100Numbers ();