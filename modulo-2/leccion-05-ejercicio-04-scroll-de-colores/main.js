"use strict";

//gets html element
const divEl = document.querySelector(".container");

//handler
function getBackgroundColor () {
  if (window.scrollY < 250) {
    const lightCoralBg = divEl.classList.add("bg-coral");
    return lightCoralBg;
  } else {
    const lightBlueBg = divEl.classList.add("bg-blue");
    return lightBlueBg;
  }
}

//listener on the window element
window.addEventListener("scroll", getBackgroundColor);
