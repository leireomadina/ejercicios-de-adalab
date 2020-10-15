"use strict";

const sentenceBtn = document.querySelector(".js-sentence");
const sentenceEl = document.querySelector(".js-result-2");

function getEmoji() {
  fetch("https://api.rand.fun/games/rockpaperscissorslizardspock")
  .then(response => response.json())
  .then(data => document.querySelector(".js-result").innerHTML = data.result);
}

document.querySelector('.js-emoji').addEventListener("click", getEmoji);

//random password (string, length=10)
function getSentence() {
  fetch("https://api.rand.fun/text/password?length=10")
  .then(response => response.json())
  .then(data => sentenceEl.innerHTML = data.result);
}

sentenceBtn.addEventListener("click", getSentence)

