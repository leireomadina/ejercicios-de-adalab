import React from "react";

const Input = props => {
  const handleInputChange = (event) => {
    // console.log("Me han escrito:", event.target.value);
    // Función para que los hijos avisen a la madre de que ha pasado algo
    props.handleInput(event.target.name, event.target.value);
    //también  podríamos subir los datos como un objeto con 2 propiedades: en la función handleInput de App pondríamos un solo parámetro data
    /*
    props.handleInput({
      name: props.name,
      value: event.target.value
    })
    */
  }
// console.log(props.handleInput);
  // console.log(props.label);
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id} value={props.value}onChange={handleInputChange}></input>
    </div>
  );
};

export default Input;