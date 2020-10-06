"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  const isElement = !!element;
  if (isElement === false) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selector}`);
  } else {
    return element;
  }
}

const h1El = getEl(".title");
console.log(h1El);
//returns <h1 class="title">QuerySelector para todas</h1>

const textEl = getEl(".text");
console.log(textEl);

const subtitleEl = getEl(".subtitle");
console.log(subtitleEl);

const imageEl = getEl(".image");
console.log(imageEl);
//returns "No existe ningún elemento con clase, id o tag llamado .image"
