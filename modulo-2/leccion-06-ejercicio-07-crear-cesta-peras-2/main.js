"use strict";

const pearBasket = {};

let added;
let removed;
let fill;
let spare;

pearBasket.min = 1;
pearBasket.max = 10;
pearBasket.actual = 0;
pearBasket.initial = 0;
pearBasket.add = function addPear(num) {
  added = this.initial + num;
  added += this.actual;
  fill = this.max - added;
  spare = added - this.max;
  if (added < this.max && added > 1) {
    console.log(
      `El número actual de peras es ${added}. Nos quedan ${fill} peras para llenar la cesta :)`
    );
  } else if (added > 10) {
    console.log(`No entran tantas peras en la cesta :(. Nos sobran ${spare} peras.`);
  } else {
    console.log(`Tiene que haber mínimo ${this.min} pera en la cesta`);
  }
};

pearBasket.add(7);

pearBasket.remove = function removePear(num) {
  removed = added - num;
  removed -= this.actual;
  fill += num;
  if (removed < this.max && removed > 2)
    console.log(
      `El número actual de peras en la cesta es ${removed}. Nos quedan ${fill} peras para llenar la cesta :)`
    );
  else if (removed < 2) {
    console.log(`No podemos quitar más peras de la cesta :(`);
  }
};

pearBasket.remove(2);
