"use strict";

const people = 9;
const totalPrice = 128;
const anaExtra = 2;
const individualAmount = (totalPrice - anaExtra) / people;
const anaAmount = individualAmount + anaExtra;

console.log("Ana tiene que pagar " + anaAmount + " €");
console.log("El resto tiene que pagar " + individualAmount + " €");
