"use strict";

const actualYear = 2020;

//el año es bisiesto si al dividir entre 4 el resto es 0
if (actualYear % 4 == 0) {
  console.log("Este es un año bisiesto");
} else if (actualYear % 4 == 1) {
  //si el resto es 1, le sumanos 3 años para llegar al próximo bisiesto
  console.log(`El siguiente año bisiesto es ${actualYear + 3}`);
} else if (actualYear % 4 == 2) {
  //si el resto es 2, le sumanos 2 años para llegar al próximo bisiesto
  console.log(`El siguiente año bisiesto es ${actualYear + 2}`);
} else {
  //si el resto es 3, le sumanos 1 año para llegar al próximo bisiesto
  console.log(`El siguiente año bisiesto es ${actualYear + 1}`);
}
