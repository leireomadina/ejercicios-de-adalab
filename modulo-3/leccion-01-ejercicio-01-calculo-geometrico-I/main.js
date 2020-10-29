"use strict";

class square {
  //creamos un método para el perímetro
  perimeter(side) {
    return side * 4;
  }
  //creamos otro método para el área  
  area(side) {
    return side * side;
  }

}

//creamos una instancia para la clase square 
const box = new square();

const side = 9;
console.log(box.perimeter(9));
console.log(`El cuadrado tiene un perímetro de ${box.perimeter(side)} cm.`);
console.log(box.area(9));
console.log(`El cuadrado tiene un área de ${box.area(side)} cm.`);
