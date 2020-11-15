import React, { useState } from "react";
import "../stylesheets/App.scss";
import Form from "./Form";

const App = () => {
  // Declaramos el estado inicial de las props mediante el hook useState
  const [address, setAddress] = useState("");
  // const adressStateInArray = useState("Henao"); // ["Henao", function ( {...})]
  //const adress = adressStateInArray[0]
  // const setAdress = adressStateInArray[1]
  const [city, setCity] = useState("");
  // console.log(adress);

  // Función para que los hijos avisen a la madre de que ha pasado algo
  const handleInput = (key, value) => {
    console.log("App: me han cambiado", key, value);
    if (key === "city") {
      setCity(value);
    } else if (key === "address") {
      setAddress(value);
    }
    //en lugar del if podemos hacer un switch
    /*
    switch (key) {
      case "address":
        setAddress(value);
        break;
      case "city":
        setCity(value);
        break;
    }
    */
  };

  const handleReset = () => {
    console.log("Reset");
    setCity("");
    setAddress("");
  }

  return (
    <div className="App">
      <h1>Props, lifting y estado</h1>
      <Form city={city} address={address} handleInput={handleInput} handleReset={handleReset}/>
      <p>Dirección: {address}</p>
      <p>Ciudad: {city}</p>
    </div>
  );
};

export default App;
