"use strict";

const kiwisQuantity = 2;
const kiwisPrice = 5;
const kiwisTotal = kiwisQuantity * kiwisPrice;
console.log("Los kiwis cuestan " + kiwisTotal + " €.");

const pearQuantity = 3;
const pearPrice = 2;
const pearTotal = pearQuantity * pearPrice;
console.log("Las peras cuestan " + pearTotal + " €.");

const grapesQuantity = 0.5;
const grapesPrice = 4;
const grapesTotal = grapesQuantity * grapesPrice;
console.log("Las uvas cuestan " + grapesTotal + " €.");

const totalPurchase = kiwisTotal + pearTotal + grapesTotal;
console.log("La suma total de la compra son " + totalPurchase + " €.");
