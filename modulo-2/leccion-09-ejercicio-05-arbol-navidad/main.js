"use strict";

function christmasTree(num) {
  let line = "";
  for (let i= 1; i <= num; i++) {
    line += "▲";
    console.log(line);
  }
  return line;
}

christmasTree(5);


//another way:

/*
function christmasTree(num) {
  for (let line = "▲"; line.length <= num; line += "▲")
  console.log(line);
  return line;
}
anotherChristmasTree(5);

 */



