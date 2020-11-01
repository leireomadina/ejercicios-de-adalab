"use strict";

import Polygon from "./01-polygon.js";

class Square extends Polygon {
  constructor(side) {
    //usamos el método super para llamar a los parámetros del constructor Polygon
    super(4, side, side);
    this.side = side;
  }
}

export default Square;

