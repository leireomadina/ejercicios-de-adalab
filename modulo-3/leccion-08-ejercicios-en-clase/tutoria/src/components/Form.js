import React from "react";
import Input from "./Input";
import Reset from "./Reset";

const Form = (props) => {
  // console.log(props.handleInput);
  // console.log(props.handleReset);
  return (
    <div>
      {/* Pasamos las props al componente hija Input */}
      <Input label="Dirección: " name="address" id="adress" value={props.address} handleInput={props.handleInput}/>
      <Input label="Ciudad: " name="city" id="city" value={props.city} handleInput={props.handleInput}/>
      <Reset handleReset={props.handleReset}/>
    </div>
  );
};

export default Form;
