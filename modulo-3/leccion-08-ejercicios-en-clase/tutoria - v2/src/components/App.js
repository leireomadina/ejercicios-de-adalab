import React, { useState } from "react";
import "../stylesheets/App.scss";
import Form from "./Form";

const App = () => {
  // Declaramos el estado inicial de las props mediante el hook useState
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  // Función handler el evento
  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value; 
    handleInput(inputName, inputValue);
  }

  const handleInput = (key, value) => {
    console.log("App: me han cambiado", key, value);
    switch (key) {
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
    }
  };

  const handleReset = () => {
    console.log("Reset");
    setCity("");
    setAddress("");
  }

  return (
    <div className="App">
      <h1>Props, lifting y estado</h1>
      <Form city={city} address={address} handleInputChange={handleInputChange} handleInput={handleInput} handleReset={handleReset}/>
      <p>Dirección: {address}</p>
      <p>Ciudad: {city}</p>
    </div>
  );
};

export default App;
