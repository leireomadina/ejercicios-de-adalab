"use strict";

//creates an empty object
const adalaber1 = {};

//adding properties (keys) to the object
adalaber1.name = "Susana";
adalaber1.age = 34;
adalaber1.job = "Periodista";
adalaber1.run = (action) => console.log("Estoy corriendo");
adalaber1.sport = function runAMarathon(distance) {
  console.log(`Estoy corriendo un maratón de ${distance} kilómetros.`);
};

//calling the functions inside of the run and sport keys
adalaber1.run();
adalaber1.sport(50);
