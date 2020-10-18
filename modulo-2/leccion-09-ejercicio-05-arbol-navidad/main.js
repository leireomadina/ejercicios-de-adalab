"use strict";

function christmasTree(height) {
  let line = "";
  for (let i = 1; i <= height; i++) {
    line += "▲";
    // line = line + "▲";
    console.log(line);
  }
  return line;
}

christmasTree(5);

//another way:

/*
function christmasTree(height) {
  for (let line = "▲"; line.length <= height; line += "▲")
  console.log(line);
  return line;
}
anotherChristmasTree(5);

 */
