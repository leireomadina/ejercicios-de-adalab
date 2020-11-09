import React from "react";
import CityImage from "./CityImage";
import CitySelector from "./CitySelector";

// EJERCICIO 2

/*
const handlerSelect = (event) => {
  // recogemos el value de la opción que selecciona el usuario
  const usersSelection = event.target.value;
  console.log(usersSelection);
  //activamos una alerta indicando la opción seleccionada
  alert(`Tu destino es viajar a ${usersSelection}`);
};
*/

// EJERCICIO 4

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    // valor inicial de las props antes de que el usuario seleccione una opción
    this.selectedCity = "...";
    // asociamos este componente al evento de tipo change
    this.handlerSelect = this.handlerSelect.bind(this);
  }

  handlerSelect(event) {
    // asociamos el value de cada option a una constante, la cual luego asociamos a las props
    const selectedCity = event.target.value;
    this.selectedCity = selectedCity;
    //activamos una alerta indicando la opción seleccionada
    alert(`Tu destino es viajar a ${this.selectedCity}`);
    // forzamos a que se ejecute la función render
    this.forceUpdate();
  }

  render() {
    const handlerSelect = this.handlerSelect;

    return (
      <form>
        {/* ojo: debemos cambiar el atributo for de html por el htmlFor de React */}
        <label htmlFor="cities" className="label">
          Elige tu destino:
          {/* Pasamos por las props del componente hija CitySelector una función llamada "actionToPerform", la cual apunta al método "handerSelect" que provoca con forceUpdate el renderizado de las img */}
        <CitySelector actionToPerform={ handlerSelect }/>
        </label>
        <p>Tu destino es viajar a {this.selectedCity}</p>
        <CityImage city={this.selectedCity}></CityImage>
      </form>
    );
  }
}

export default Destiny;
