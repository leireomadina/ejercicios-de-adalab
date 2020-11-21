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
  // ESTADO
  const [products, setProducts] = useState([]);
  // Creamos un nuevo estado para contener los datos que vamos a filtrar
  const [filterText, setFilterText] = useState("");

  // API
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

  // EVENTO
  // En una función manejadora solo deberíamos modificar el estado, no hacer acciones como maps o filters: para eso haremos luego la función filteredProducts
  const handleFilter = (filterText) => {
    setFilterText(filterText);
  };

  // FILTRADO
  const filteredProducts = products.filter((product) => {
    // console.log(product.name, filterText);
    // Pasamos los dos textos a minúsculas para evitar que el buscador funcione independientemente de si escribimos en mayus o minus
    return product.name.toLowerCase().includes(filterText.toLowerCase());
  });
  console.log(filteredProducts);

  return (
    <>
      <div className="col2">
        {/* Pasamos hacia abajo los productos filtrados */}
        <Products products={filteredProducts} handleFilter={handleFilter} />
      </div>
    </>
  );
};

export default App;
