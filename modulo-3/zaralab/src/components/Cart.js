import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    return (
      <section className="cart">
        <h3 className="cart__title">Cesta de la compra</h3>
        <ul className="cart__list">
          <CartItem title="Camiseta" amount={1} price={69} />
        </ul>
      </section>
    );
  }
}

export default Cart;
