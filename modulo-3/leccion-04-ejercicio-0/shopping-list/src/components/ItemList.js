import React from "react";
import Item from "./Item";

//incluimos un array de objetos con los datos de cada item de la lista
const arrayOfItems = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5,
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15,
  },
  {
    name: "Agua mineral",
    description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5,
  },
];

class ItemList extends React.Component {
  render() {
    //definimos un nuevo array (inicialmete vacío) para incluir dentro cada item
    let newItemsArray = [];
    //definimos otro array para incluir solo aquellos productos con precio < 10€ (usando el método filter)
    let cheapItemsArray = [];
    //usamos el método filter para recorrer el array inicial dado: queremos que solo aparezcan aquellos productos con precio menor a 10€
    cheapItemsArray = arrayOfItems.filter( arrayItem => arrayItem.price < 10);
    //usamos el método map para recorrer el array de la línea anterior y que nos devuelva los items con precio <10€ junto con sus atributos personalizados
    newItemsArray = cheapItemsArray.map((arrayItem) => {
      //devolvemos cada item dentro de un li
      return (
        <li>
          <Item
          // accedemos a las claves de cada objeto usando corchetes (son variables) + un punto seguido del nombre de cada clave
            name={arrayItem.name}
            description={arrayItem.description}
            quantity={arrayItem.quantity}
            category={arrayItem.category}
            price={arrayItem.price}
          ></Item>
        </li>
      );
    });

    //devolvemos el nuevo array dentro de un ul
    return <ul className="item-list">{newItemsArray}</ul>;
  }
}

// CÓDIGO INICIAL
/*
class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        {arrayOfItems.map((Item) => (
          <li>{Item}</li>
        ))}
      </ul>
    );
  }
}
*/
/*
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
        <li>
          <Item
            name="Leche de soja"
            description="Leche vegetal saludable"
            quantity={2}
            category="Lácteos"
            price={2.2}
          >
          </Item>
        </li>
      </ul>
    );
  }
}
*/

export default ItemList;
