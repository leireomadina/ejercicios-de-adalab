import React from "react";

class CitySelector extends React.Component {
  render() {
    const actionToPerform = this.props.actionToPerform;
    return (
      <select
        id="cities"
        name="cities"
        // Aquí es donde se da el lifting: recogemos la función que llega de la madre por props (actionToPerform) y se la asignamos al event OnChange del select: al seleccionar una opción del select se ejecuta la función de la madre Destiny
        onChange={actionToPerform}
        className="select"
      >
        <option value="Buenos Aires">Buenos Aires</option>
        <option value="Sidney">Sidney</option>
        <option value="Praga">Praga</option>
        <option value="Boston">Boston</option>
        <option value="Tokio">Tokio</option>
      </select>
    );
  }
}

export default CitySelector;
