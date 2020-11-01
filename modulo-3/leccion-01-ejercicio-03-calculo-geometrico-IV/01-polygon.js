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

export default Polygon;