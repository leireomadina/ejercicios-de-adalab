import "../stylesheets/App.scss";
import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  // definimos los estados iniciales
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");
  const [age, setAge] = useState("");
  const [genre, setGenre] = useState("");

  //cambios de estado con respecto al value de los input
  const handleInput = (name, value) => {
    console.log("App: me escuchan");
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "language") {
      setLanguage(value);
    } else if (name === "age") {
      setAge(value);
    } else if (name === "genre") {
      setGenre(value);
    } 
  };

  return (
    <div className="App">
      <header>
        <h1>Formulario para pelis</h1>
      </header>
      <main>
        <section>
          <Form title={title} description={description} language={language} age={age} genre={genre} handleInput={handleInput}/>
        </section>
        <section>
          <Card title={title} description={description} language={language} age={age} genre={genre}/>
        </section>
      </main>
    </div>
  );
};

export default App;
