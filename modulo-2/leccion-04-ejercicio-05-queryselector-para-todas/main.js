"use strict";

function getEl(selector) {
  return document.querySelector(selector);
}

const h1El = getEl(".title");
console.log(h1El);

const textEl = getEl(".text");
console.log(textEl);

const subtitleEl = getEl(".subtitle");
console.log(subtitleEl);
