import React, {useState} from "react";
import '../stylesheets/App.scss';
import Form from "./Form";

const App = () => {
  // Declaramos el estado inicial de las props mediante el hook useState
  const [adress, setAdress] = useState("Henao");
  // const adressStateInArray = useState("Henao"); // ["Henao", function ( {...})]
  //const adress = adressStateInArray[0]
  // const setAdress = adressStateInArray[1]
  const [city, setCity] = useState("Bilbao");
  console.log(adress);
 
  return (
    <div className="App">
      <h1>Props, lifting y estado</h1>
      <Form />
      <p>Dirección: {adress}</p>
      <p>Ciudad: {city}</p>
    </div>
  );
}

export default App;
