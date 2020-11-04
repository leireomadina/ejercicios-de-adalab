import React from 'react';
import Item from './Item';

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        <li>
          <Item
             name="Cereales con chocolate"
             description="Cereales rellenos de chocolate"
             // usamos los corchetes porque queremos pasar un dato diferente de string, en este caso un number
             quantity={2}
             category="Cereales"
             price={5}
          ></Item>
        </li>
        <li>
          <Item
            name="Hamburguesa con queso"
            description="Hamburguesa rica y saludable"
            quantity={1}
            category="Fast-food"
            price={15}
          >
          </Item>
        </li>
      </ul>
    );
  }
}

export default ItemList;