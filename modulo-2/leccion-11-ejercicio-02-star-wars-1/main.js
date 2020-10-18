"use strict";
// seleccionamos el botón de búsqueda
const btn = document.querySelector(".js-btn");
//seleccionamos la lista donde se pintarán los resultados
let charactersInfo = document.querySelector(".js-list");

// listener para el botón, el cual activará la función getCharacter
btn.addEventListener("click", getCharacter);

// creamos la función que realizará las peticiones a la API
function getCharacter() {
  //seleccionamos el valor del input, que recogerá el nombre que escriba el usuario
  const userSearch = document.querySelector(".js-input").value;
  //petición al server de la API incluyendo el parámetro search para buscar en la base de datos
  fetch(`https://swapi.dev/api/people/?search=${userSearch}`)
    .then(response => response.json())
    .then(data => {
      //accedemos a data.results (ver docu API)
      const characters = data.results;
      // el resultado es un objeto (un personaje que tiene diferentes propiedades o claves)
      // console.log(typeof(characters));
      // creamos un bucle para recorrer las claves de cada objeto/personaje
      for (let i= 0; i < characters.length; i++) {
        //seleccionamos los nombres de los personajes
        const characterName = characters[i].name;
        //seleccionamos los géneros de los personajes
        const characterGender = characters[i].gender;
        //añadimos a la lista los resultados que coinciden con la búsqueda
        charactersInfo.innerHTML += `<li>Name: ${characterName}</li><li>Gender: ${characterGender}</li>`
      }
    });
}

