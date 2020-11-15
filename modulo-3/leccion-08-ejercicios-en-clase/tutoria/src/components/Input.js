import React from "react";

const Input = props => {
  console.log(props.label);
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id}></input>
    </div>
  );
};

export default Input;