"use strict";
const palettesContainer = document.querySelector(".js-palettes-container");
//definimos el array vacío para las paletas (ul)
let palettes = [];
//definimos el array vacío de favoritos
let favoritesList = [];

//PASO 1: fetch para recoger info del server
function getData() {
  fetch("https://beta.adalab.es/ejercicios-extra/js-ejercicio-de-paletas/data/palettes.json")
    //PASO 2: parsear la info
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      palettes = data.palettes;
      // console.log(palettes);
      console.log("Entro en getData");
      /*la función de pintar debe ir aquí y no fuera del fetch porque necesitamos acceder a la info de data + no podemos pintar paletas hasta que no recibamos la respuesta del server */
      paintPalettes();
      //es imprescindible que esta fn vaya aquí también
      listenPalette();
      setLocalStorage();
    });
}

//PASO 3: pintar paleta en HTML => creamos una ul vacía en html
//seleccionamos la ul con queryselector (ver arriba)
function paintPalettes() {
  //al principio la lista se mostrará vacía
  let html = "";
  //bucle para pintar cada paleta
  for (let i = 0; i < palettes.length; i++) {
    //vamos a quitar y poner las clases de CSS de favoritos
    let classF;
    //reutilizamos el código de la fn favoritesPalettes, cambiando solo las variables de nombre
    const favoriteIndex = favoritesList.indexOf(i);
    const favorite = favoriteIndex !== -1;

    if (favorite === true) {
      classF = "palettes__item--favorite";
    } else {
      classF = "";
    }

    html += `<li class="js-palette-item  palettes__item--favorite ${classF}" id="${i}">`;
    html += `<h2 class= "palettes__name">${palettes[i].name}</h2>`;
    html += `<div class= "palettes__colors">`;
    for (const color of palettes[i].colors) {
      html += `<div class="palettes__color" style="background-color: #${color}">1</div>`;
    }
    html += "</div>";
    html += "</li>";
  }
  palettesContainer.innerHTML = html;
  // console.log("Pintar");
  // console.log(html);
}

const favoritesPalette = function (event) {
  // console.log("Escucho evento");
  const clicked = parseInt(event.currentTarget.id);
  // const isFavorite = favoritesList.find((click) => {
  //   return click;
  // });
  //usamos el index para comprobar si el elem clickado está en el array (devuelve -1 si no está en el array // nos encuentra la posición del elemento en cuestión)
  const indexFav = favoritesList.indexOf(clicked);
  //en indexFav guardamos la posición del elemento clickado
  const isFavorite = indexFav !== -1;
  // console.log(isFavorite);
  if (isFavorite === false) {
    // console.log("Lo meto");
    //añadimos favorito al array cuando no existe dentro del array
    favoritesList.push(clicked);
  } else {
    //quitamos favorito del array cuando ya existe dentro del array: le quitamos un elemento (1), teniendo en cuenta la posición guardad del mismo dentro del array
    favoritesList.splice(indexFav, 1);
    // console.log("Lo quito");
  }
  // console.log(favoritesList);
  paintPalettes();
  listenPalette();
};

//PASO 5: marcar paletas como favoritas
function listenPalette() {
  const paletteItems = document.querySelectorAll(".js-palette-item");
  for (const paletteItem of paletteItems) {
    paletteItem.addEventListener("click", favoritesPalette);
  }
}

function setLocalStorage() {
  localStorage.setItem("palettes", JSON.stringify(palettes));
}

function getLocalStorage() {
  const localPalette = localStorage.getItem("palettes");
  const localPaletteJ = JSON.parse(localStorage);
  if (localPaletteJ === null) {
    getData();
  } else {
    palettes = localPaletteJ;
    paintPalettes();
    listenPalette();
  }
}

//metemos el fetch dentro de una función getData() y la llamamos después
//esta función no es imprescindible colocarla justo aquí (en este order)
getData();

//PASO 4: pintar varias paletas => cambiamos la URL del server en el fetch
//ponemos la URL donde están todas las paletas y no solo la primera que teníamos antes
