const _ = require("lodash");

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

const arrUnion = _.union(arr1, arr2);
console.log(
  `La unión de los arrays ${arr1} y ${arr2} es ${arrUnion}` // 1,2,3,4
);
