import React from "react";
import Product from "./Product";
import Filters from "./Filters";
import Title from "./Title";

const Products = (props) => {
 
  const productsItems = props.products.map((product, index) => {
    // console.log(product);
    return (
      <Product
        imageUrl={product.imageUrl}
        name={product.name}
        price={product.price}
        key={index}
      />
    );
  });

  return (
    <div>
      <Title title="Listado de camisetas" />
      <Filters />
      <section className="cards">{productsItems}</section>
    </div>
  );
};

export default Products;
