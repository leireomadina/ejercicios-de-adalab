import React, { useState, useEffect } from "react";
import Products from "./Products";
import api from "../service/api";

/*
Guardamos la promesa del fetch dentro de una constante para poder hacer un log de la misma, que aparecerá como promise (pending)
const fetchPromise = api.getDataFromApi().then(data => {
  console.log(data);
});
console.log(fetchPromise);
*/

const App = () => {
  //ESTADO
  const [products, setProducts] = useState([]);

  //API
  // Usamos el ciclo de vida de React con el hook useEffect (porque estamos usando un componente funcional) para que la petición al API se ejecute sólo una vez
  useEffect(
    () => {
      // 1º parámetro de UseEffect
      api.getDataFromApi().then((data) => {
        // console.log(data);
        // data es un array de 3 elementos con los datos del API (los hemos limpiado previamente en el archivo de la carpeta service)
        setProducts(data);
      });
    },
    // 2º parámetro de useEffect: le indica a React que vuelva a ejecutar el 1º paámetro si algo cambia => ponemos un array vacío para que React identifique  que no ha cambiado nada y entonces no se vuelva a ejecutar la llamada a la API
    []
  );
  // if(products.cart !== undefined) {
  //   console.log(products.cart.items);
  // }

  return (
    <>
      <div className="col2">
        <Products products={products}/>
      </div>
    </>
  );
};

export default App;
