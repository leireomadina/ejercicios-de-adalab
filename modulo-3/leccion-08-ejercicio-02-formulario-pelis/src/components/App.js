import "../stylesheets/App.scss";
import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";

const App = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("Español");

  const handleInput = (name, value) => {
    console.log("App: me escuchan");
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "language") {
      setLanguage(value);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>Formulario para pelis</h1>
      </header>
      <main>
        <section>
          <Form title={title} description={description} language={language} handleInput={handleInput}/>
        </section>
        <section>
          <Card title={title} description={description} language={language} />
        </section>
      </main>
    </div>
  );
};

export default App;
