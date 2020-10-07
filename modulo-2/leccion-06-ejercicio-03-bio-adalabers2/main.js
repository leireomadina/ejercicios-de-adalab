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
adalaber1.bio = function showBio() {
  console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`);
};

//calling the funciton inside of the bio key
adalaber1.bio();

const adalaber2 = {};

adalaber2.name = "Rocío";
adalaber2.age = 25;
adalaber2.job = "actriz";
adalaber2.bio = function showBio() {
  console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}.`);
};

//no need to change the showBio function, just call it followed by another object
adalaber2.bio();
