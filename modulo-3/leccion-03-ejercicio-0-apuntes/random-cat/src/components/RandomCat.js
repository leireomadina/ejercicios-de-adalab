import React from "react";

//creamos una función para que las imágenes de gatos que se generen sean diferentes y no la misma como sucede en caso contrario: generamos primero un número aleatorio
const getRandomInteger = maxNumber => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

class RandomCat extends React.Component {
  render() {
    const randomCat = getRandomInteger(NUMBER_OF_CATS);
    return (
      <a href="http://lorempixel.com" target="_blank" rel="noreferrer">
        <img src={`http://lorempixel.com/400/200/cats/${randomCat}`} alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
