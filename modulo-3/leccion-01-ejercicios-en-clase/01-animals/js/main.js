"use strict";

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

/******************** FUNCIÓN INIT *********************/

//creamos una función para inicializar el código principal: intentaremos que todo el código esté siempre dentro de funciones :)
function init() {
  //creamos instancias de la clase/objeto Animal
  const firstAnimal = new Animal(22, 4);
  const secondAnimal = new Animal(22, 4);

  //llamamos a la función de pintar
  firstAnimal.renderAnimal();

  /*
  //ponemos un timer para que los datos del segundo animal aparezcan en pantalla 3 seg. más tarde
  setTimeout(() => {
    secondAnimal.renderAnimal();
  }, 3000);
  */

  //creamos una nueva instancia/objeto a partir de la subclase Cat
  const wiskas = new Cat(15, "Wiskas");
  wiskas.renderAnimal();

  //seleccionamos el botón de "Despertar" y le añadimos un event listener para que la propiedad state del objeto cambie al hacer click sobre él y que además se renderice en pantalla
  const wakeUpButton = document.querySelector(".js-wakeup");
  //es buena idea acostumbrarnos a usar funciones anónimas en línea, las usaremos mucho
  wakeUpButton.addEventListener("click", () => {
    firstAnimal.wakeUp();
    firstAnimal.renderAnimal();
  });

  //Similar al anterior pero para el botón "Dormir" / status dormido
  const sleepButton = document.querySelector(".js-sleep");
  sleepButton.addEventListener("click", () => {
    firstAnimal.gotobed();
    firstAnimal.renderAnimal();
  });

  //similar a los anteriores para para el botón "Habla": aparecerá y desaparecerá un gif
  const roarButton = document.querySelector(".js-roar");
  roarButton.addEventListener("click", () => {
    wiskas.roar();
  });

  console.log(firstAnimal);
}

//llamamos a la función init para que se ejecute
init();
