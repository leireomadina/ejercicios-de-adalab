"use strict";

//aquí no hace falta importar nada al principio porque estamos en la clase madre

/******************** CLASS ANIMAL  *********************/

//definimos una clase para crear un objeto: un animal
class Animal {
  constructor(age, legs) {
    //usamos this para crear propiedades referenciados al objeto en cuestión
    this.state = "asleep";
    this.age = age;
    this.legs = legs;
  }

  //método para pintar los datos del objeto en pantalla
  renderAnimal() {
    //seleccionamos el contenedor html donde se pintarán los datos
    const state = document.querySelector(".js-state");
    //usamos el this para que esta función sea general y nos funcione para todos los objetos que creemos con esta clase Animal
    state.innerHTML = `State: ${this.state}<br/>`;
    state.innerHTML += `Age: ${this.age}<br/>`;
    state.innerHTML += `Legs: ${this.legs}<br/>`;
  }

  //método para despertar al animal
  wakeUp() {
    this.state = "awake";
  }

  //método para decir que el animal está dormido
  gotobed() {
    this.state = "asleep";
  }
}

//exportamos este archivo: le podemos poner default porque solo tenemos una cosa para exportar
export default Animal;