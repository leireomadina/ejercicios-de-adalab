"use strict";

function christmasTree(height) {
  for (let peak = "★"; peak.length <= 1; peak += "▲") {
    console.log(peak);
  }
  for (let line = "▲"; line.length <= height; line += "▲") {
    console.log(line);
  }
  for (let base = "|"; base.length <= 1; base += "|") {
    console.log(base);
  }
}

christmasTree(5);

//another way:

/*
function christmasTree(height) {
  let base = "|";
  let peak = "★";
  console.log(peak);
  let line = "";
  for (let i= 1; i <= height; i++) {
    line += "▲";
    console.log(line);
  }
  console.log(base);
}

christmasTree(5);
*/



