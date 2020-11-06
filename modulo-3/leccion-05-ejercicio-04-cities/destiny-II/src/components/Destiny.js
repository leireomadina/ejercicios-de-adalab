import React from "react";
import CityImage from "./CityImage";

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

class Destiny extends React.Component {
  constructor(props) {
    super(props);
    this.handlerSelect = this.handlerSelect.bind(this);
    this.city = city;
  }
  handlerSelect(event) {
    const usersSelection = event.target.value;
    // usersSelection === "Tokio";
    console.log(usersSelection);
    //activamos una alerta indicando la opción seleccionada
    alert(`Tu destino es viajar a ${usersSelection}`);
    this.forceUpdate();
  }

  render() {
    const handlerSelect = this.handlerSelect;
    return (
      <form>
        {/* ojo: debemos cambiar el atributo for de html por el htmlFor de React */}
        <label htmlFor="cities" className="label">
          Elige tu destino:
          <select id="cities" name="cities" onChange={handlerSelect} className="select">
            <option value="Buenos aires">Buenos Aires</option>
            <option value="Sidney">Sidney</option>
            <option value="Praga">Praga</option>
            <option value="Boston">Boston</option>
            <option value="Tokio">Tokio</option>
          </select>
        </label>
        <p>Tu destino es viajar a {this.city}</p>
        <CityImage city={"Tokio"}></CityImage>
      </form>
    );
  }
}

export default Destiny;
