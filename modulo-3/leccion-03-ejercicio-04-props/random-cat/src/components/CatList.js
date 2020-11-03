import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li className="section-cats_item">
            <RandomCat width="200px" height="200px" />
          </li>
          <li className="section-cats_item">
            <RandomCat width="200px"  height="400px"/>
          </li>
          <li className="section-cats_item">
            {/* aquí no definimos atributos, de modo que la tercera img cogerá el ancho y alto por defecto */}
            <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
