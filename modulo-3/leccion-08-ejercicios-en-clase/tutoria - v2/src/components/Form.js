import React from "react";
import Input from "./Input";
import Reset from "./Reset";

const Form = (props) => {

  return (
    <div>
      <Input label="Dirección: " name="address" id="adress" value={props.address} handleInputChange={props.handleInputChange}/>
      <Input label="Ciudad: " name="city" id="city" value={props.city} handleInput={props.handleInput} handleInputChange={props.handleInputChange}/>
      <Reset handleReset={props.handleReset}/>
    </div>
  );
};

export default Form;
