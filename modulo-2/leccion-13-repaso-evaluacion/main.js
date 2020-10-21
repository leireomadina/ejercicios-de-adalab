"use strict";
const palettesContainer = document.querySelector(".js-palettes-container");
let palettes = [];

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
      /*la función de pintar debe ir aquí y no fuera del fetch porque necesitamos acceder a la info de data + no podemos pintar paletas hasta que no recibamos la respuesta del server */
      paintPalettes();
    });
}

//PASO 3: pintar paleta en HTML => creamos una ul vacía en html
//seleccionamos la ul con queryselector (ver arriba)

function paintPalettes() {
  //al principio la lista se mostrará vacía
  let html = "";
  //bucle para pintar cada paleta
  for (const palette of palettes) {
    html += "<li>";
    html += `<h2 class= "palettes__name">${palette.name}</h2>`;
    html += `<div class= "palettes__colors">`;
    for (const color of palette.colors) {
      html += `<div class="palettes__color" style="background-color: #${color}">1</div>`;
    }
    html += "</div>";
    html += "</li>";
  }
  palettesContainer.innerHTML = html;
  console.log("Pintar");
  // console.log(html);
}

//metemos el fetch dentro de una función getData() y la llamamos después
//esta función no es imprescindible colocarla justo aquí (en este order)
getData();

//PASO 4: pintar varias paletas => cambiamos la URL del server en el fetch
//ponemos la URL donde están todas las paletas y no solo la primera que teníamos antes

//PASO 5: marcar paletas como favoritas
