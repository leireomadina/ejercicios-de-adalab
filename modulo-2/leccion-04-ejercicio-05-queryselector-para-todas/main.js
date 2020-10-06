"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  return element;
}

const h1El = getEl(".title");
console.log(h1El);

const textEl = getEl(".text");
console.log(textEl);

const subtitleEl = getEl(".subtitle");
console.log(subtitleEl);
