"use strict";

const marks = [5, 4, 6, 7, 9];


const inflatedMarks = marks.map(mark => mark +=1);

/*

//sin usar la función de tipo arrow:

const inflatedMarks = marks.map(function(num) {
  return num +=1;
});

*/

console.log(inflatedMarks);