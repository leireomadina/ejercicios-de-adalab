import React from "react";
import "../stylesheets/App.css";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />

      <table className="table">
        <tbody>
          <EmailItem
            from="Front Fest"
            subject="Entradas ya a la venta"
            time="15:27"
          />
          <EmailItem
            from="Github"
            subject="Adalab/project-promo-i Local store #23"
            time="13:51"
          />
          <EmailItem
            from=" Node Weekly"
            subject=" Node Weekly"
            time="20:41"
          />
        </tbody>
      </table>

      <EmailReader />
    </div>
  );
}

export default App;
