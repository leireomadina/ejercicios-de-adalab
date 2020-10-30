"use strict";

class Polygon {
  //Creamos un constructor con tres parámetros/atributos
  constructor(numberOfSides, base, height) {
    this.numberOfSides = numberOfSides;
    this.base = base;
    this.height = height;
  }
  //creamos un método para el perímetro referenciando al constructor
  perimeter() {
    return this.side * this.numberOfSides;
  }
  //creamos otro método para el área referenciando al constructor
  area() {
    return this.base * this.height;
  }
}

class Square extends Polygon {
  constructor(side) {
    //usamos el método super para llamar a los parámetros del constructor Polygon
    super(4, side, side);
    this.side = side;
  }
}

class Triangle extends Polygon {
  //usamos el método super para llamar a los parámetros del constructor Polygon
  constructor(base, height) {
    super(3, base, height);
  }

  area() {
    //sobreescribimos el método de área para adaptarlo al triángulo
    return super.area() / 2;
  }
}

//creamos una instancia para la clase Square y otra para la clase Triangle y les pasamos como parámetros los datos dados por el ejercicio
const mySquare = new Square(4);
const myTriangle = new Square(4, 3);

console.log(mySquare.perimeter());
console.log(mySquare.area());
console.log(myTriangle.perimeter());
console.log(myTriangle.area());
