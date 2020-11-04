import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <h5 className="quantity">{this.props.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{this.props.description}</h6>
        </div>
        <div className="badge badge-info">{this.props.category}</div>
        <h5 className="price">{this.props.price}€</h5>
      </div>
    )
  }
}

//EJERCICIO 3: definimos que si no existe una prop description salga el siguiente texto (tenemos que borrar la clave description del objeto para que funcione):
Item.defaultProps = {
  description: "No hay descripción."
}

//EJERCICIO 4: definimos propTypes para que el precio sea un valor numérico, y tanto éste como el nombre sean obligatorios
Item.propTypes = {
  price: PropTypes.number,
  price: PropTypes.isRequired,
  name: PropTypes.string.isRequired
}

export default Item;