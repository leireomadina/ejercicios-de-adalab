import React from "react";

const getRandomInteger = (maxNumber) => Math.floor(Math.random() * maxNumber);
const NUMBER_OF_CATS = 10;

const RandomCat = props => {
  const randomCat = getRandomInteger(NUMBER_OF_CATS);
  return (
    <a href="http://lorempixel.com" target="_blank" rel="noreferrer">
      <img
        src={`http://lorempixel.com/400/200/cats/${randomCat}`}
        alt="Random cat"
        //añadimos un OR de modo que si las imágenes no tienen definido el atributo width o height se ponga una medida por defecto: 400 y 200 px respectivamente
        width={props.width || "400px"}
        height={props.height || "200px"}
      />
    </a>
  );
};

export default RandomCat;
