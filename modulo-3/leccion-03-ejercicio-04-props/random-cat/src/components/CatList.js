import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
          <li className="section-cats_item">
            <RandomCat />
          </li>
          <li className="section-cats_item">
            <RandomCat />
          </li>
          <li className="section-cats_item">
            <RandomCat />
          </li>
        </ul>
      </section>
    );
  }
}

export default CatList;
