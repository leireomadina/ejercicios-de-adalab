"use strict";

const buttonEl = document.querySelector(".js-btn");

//handler
function logEvent(event) {
  //event.type is a property which returns the type of the event
  console.log(event);
}

//listener
buttonEl.addEventListener("click", logEvent);
