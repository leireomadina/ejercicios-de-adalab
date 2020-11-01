"use strict";

//importamos la subclase Cat desde su correspondiente archivo
import Cat from "./Cat.js";

/******************** FUNCIÓN INIT *********************/

//creamos una función para inicializar el código principal: intentaremos que todo el código esté siempre dentro de funciones :)
function init() {

  //creamos una nueva instancia/objeto a partir de la subclase Cat
  const wiskas = new Cat(15, "Wiskas");
  wiskas.renderAnimal();

  //seleccionamos el botón de "Despertar" y le añadimos un event listener para que la propiedad state del objeto cambie al hacer click sobre él y que además se renderice en pantalla
  const wakeUpButton = document.querySelector(".js-wakeup");
  //es buena idea acostumbrarnos a usar funciones anónimas en línea, las usaremos mucho
  wakeUpButton.addEventListener("click", () => {
    wiskas.wakeUp();
    wiskas.renderAnimal();
  });

  //Similar al anterior pero para el botón "Dormir" / status dormido
  const sleepButton = document.querySelector(".js-sleep");
  sleepButton.addEventListener("click", () => {
    wiskas.gotobed();
    wiskas.renderAnimal();
  });

  //similar a los anteriores para para el botón "Habla": aparecerá y desaparecerá un gif
  const roarButton = document.querySelector(".js-roar");
  roarButton.addEventListener("click", () => {
    wiskas.roar();
  });

  console.log(wiskas);
}

//llamamos a la función init para que se ejecute
init();
