import React from "react";

const Input = props => {

  const handleInputChange = (event) => {
    console.log("Me han clickado", event.target.value);
  }

  // console.log(props.label);
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id} onChange={handleInputChange}></input>
    </div>
  );
};

export default Input;