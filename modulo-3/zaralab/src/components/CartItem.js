import React from 'react';

class CartItem extends React.Component {
  render() {
    return (
      <li className="cart__list--item">
        <span className="cartListItem__concept">{this.props.title}</span>
        <span className="cartListItem__amount">x {this.props.amount}</span>
        <span className="cartListItem__price">{this.props.price}€</span>
      </li>
    )
  }
}

export default CartItem;