"use strict";

//gets html element
const bodyEl = document.querySelector(".bg");

//handler
function changeBackgroundColor(event) {
  if (event.key === "r") {
    const coralBackground = bodyEl.classList.add("bg-coral");
    return coralBackground;
  } else if (event.key === "m") {
    const purpleBackground = bodyEl.classList.add("bg-purple");
    return purpleBackground;
  }
}

//listener on the window element
document.addEventListener("keydown", changeBackgroundColor);
