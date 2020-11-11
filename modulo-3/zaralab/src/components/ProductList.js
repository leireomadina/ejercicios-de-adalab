import React from 'react';
import Product from './Product';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="shelves">
        <h3 className="shelves__title">Lista de productos</h3>
        <Product title="Camiseta" price={39} src="./images/tshirt-simple-by_vexels.png" />
        <Product title="Pantalón" price={59} src="./images/pants-simple-by_vexels.png" />
        <Product title="Botas" price={89} src="./images/arctic-boots-illustration-by-Vexels.png" />
        <Product title="Mantitas suaves" price={14} src="./images/winter-blankets-flat-by-Vexels.png" />
      </section >
    );
  }
}

export default ProductList;