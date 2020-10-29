"use strict";

class square {
  //definimos un constructor con el atributo side
  constructor(side) {
    this.side = side;
  }
  //creamos un método para el perímetro referenciando al constructor 
  perimeter() {
    return this.side * 4;
  }
  //creamos otro método para el área referenciando al constructor 
  area() {
    return this.side * this.side;
  }
}

//creamos 3 instancias de la clase square 
const box1 = new square(1);
const box2 = new square(3);
const box3 = new square(7);

console.log(box1.perimeter());
console.log(box1.area());
console.log(box2.perimeter());
console.log(box2.area());
console.log(box3.perimeter());
console.log(box3.area());

console.log(`El cuadrado 1 tiene un perímetro de ${box1.perimeter()} cm y un área de ${box1.area()} cm2`);
console.log(`El cuadrado 2 tiene un perímetro de ${box2.perimeter()} cm y un área de ${box2.area()} cm2`);
console.log(`El cuadrado 2 tiene un perímetro de ${box3.perimeter()} cm y un área de ${box3.area()} cm2`);
