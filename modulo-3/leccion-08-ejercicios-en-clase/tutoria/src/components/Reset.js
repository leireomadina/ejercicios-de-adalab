import React from "react";

const Reset = (props) => {
  // console.log(props.handleReset);
  //en lugar de este código podemos poner directamente dentro del evento onClick={props.handleReset}. Simplemente esto es una función llamando a otra función
  /*
  const handleReset = () => {
    props.handleReset();
  };
  */
  return (
    <div>
      <button onClick={props.handleReset}>Reset</button>
    </div>
  );
};

export default Reset;
