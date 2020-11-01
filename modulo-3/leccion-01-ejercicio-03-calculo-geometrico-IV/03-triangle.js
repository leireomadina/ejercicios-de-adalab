"use strict";

import Polygon from "./01-polygon.js";

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

export default Triangle;