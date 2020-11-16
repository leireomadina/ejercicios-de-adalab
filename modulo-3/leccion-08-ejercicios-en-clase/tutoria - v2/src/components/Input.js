import React from "react";

const Input = props => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id} value={props.value}onChange={props.handleInputChange}></input>
    </div>
  );
};

export default Input;