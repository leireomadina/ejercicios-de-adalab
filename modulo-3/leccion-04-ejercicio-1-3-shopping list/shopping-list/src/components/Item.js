import React from 'react';

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

export default Item;