const URL = "https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json";

const getDataFromApi = () => {
  return fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      // console.log("Ya tengo los datos");
      // "Limpiamos" los datos que vienen del API para quedarnos sólo con el array de 3 elementos
      return data.cart.items;
    });
};

// Lo guardamos como un objeto por si en el futuro incluirmos otras funciones
export default {
  getDataFromApi: getDataFromApi,
};
