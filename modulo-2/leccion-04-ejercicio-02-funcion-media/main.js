"use strict";

function getMedia(num1, num2, num3, num4) {
  const media = (num1 + num2 + num3 + num4) / 2;
  return media;
}

const getMediaResult = getMedia(3, 5, 2, 4);
console.log(getMediaResult);
//returns 7
