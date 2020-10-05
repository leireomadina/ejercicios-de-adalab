"use strict";

function getPrice(num) {
  const getIva = (num * 21) / 100;
  const totalPrice = num + getIva;

  return `Precio sin IVA: ${num} €, IVA: ${getIva} € y Total: ${totalPrice} €`;
}

const getTicket = getPrice(10);
console.log(getTicket);
//returns
