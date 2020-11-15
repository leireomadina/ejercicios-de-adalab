import React from "react";
import Input from "./Input";
import Reset from "./Reset";

const Form = () => {
  return (
    <div>
      {/* Pasamos las props al componente hija Input */}
      <Input label="Dirección: " name="address" id="adress" />
      <Input label="Ciudad: " name="city" id="city"/>
      <Reset />
    </div>
  );
};

export default Form;
