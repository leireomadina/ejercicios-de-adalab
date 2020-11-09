import React from "react";

class CitySelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <select
        id="cities"
        name="cities"
        onChange={this.handlerSelect}
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
