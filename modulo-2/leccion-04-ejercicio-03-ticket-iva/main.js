"use strict";

function getIVA(price) {
  const iva = (price * 21) / 100;
  const totalPrice = price + iva;
  const result = `Precio sin IVA: ${price} €, IVA: ${iva} € y Total: ${totalPrice} €`;
  return result;
}

const ticket = getIVA(10);
console.log(ticket);
