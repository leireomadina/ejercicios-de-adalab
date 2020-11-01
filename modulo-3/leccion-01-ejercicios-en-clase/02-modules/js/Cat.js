"use strict";

//importamos la clase Animal desde su fichero: en React no pondremos el .js, pero por ahora sí
import Animal from "./Animal.js";

/******************** SUBCLASE CAT  *********************/

//creamos una subclase Cat que herede los métodos y atributos de la clase Animal
class Cat extends Animal {
  //creamos un nuevo constructor para esta subclase Cat
  constructor(age, name) {
    /* Primero tenemos que llamar a los parámetros de la clase madre Animal usando el super (age, legs). Y luego ya ponemos definir si queremos propiedades nuevas: creamos una para el nombre usando el this */
    super(age, 4);
    this.name = name;
  }

  //sobreecribimos el método renderAnimal
  renderAnimal() {
    /* en lugar de volver a poner las tres líneas de código con inner html que ya están escritas en la clase Animal, las llamamos con el super (se heredan) y luego creamos solo una nueva línea de código para el name */
    super.renderAnimal();
    const state = document.querySelector(".js-state");
    // state.innerHTML = `State: ${this.state}<br/>`
    // state.innerHTML += `Age: ${this.age}<br/>`
    // state.innerHTML += `Legs: ${this.legs}<br/>`;
    state.innerHTML += `Name: ${this.name}<br/>`;
  }

  //creamos dos nuevos métodos para esta subclase
  roar() {
    const imageContainer = document.querySelector(".js-image");
    imageContainer.src =
      "https://media1.tenor.com/images/e2e2b34a92104c8c545e3dabb4ebaffa/tenor.gif?itemid=15745519";
    imageContainer.classList.remove("hidden");

    //incluimos un timer para que el gif desaparezca tras 2 segundos
    setTimeout(() => {
      imageContainer.classList.add("hidden");
    }, 2000);
  }

  purrr() {
    
  }
}

//exportamos este archivo: le podemos poner default porque solo tenemos una cosa para exportar
export default Cat;