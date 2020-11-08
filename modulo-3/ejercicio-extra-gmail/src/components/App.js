import React from "react";
import "../stylesheets/App.css";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import Header from "./Header";
// Nuestro array con objetos está en la carpeta data. "emails" no va en mayúsculas porque no es un componente
import emails from '../data/emails.json';

const renderEmails = () => {
  //hacemos un map para recorrer los 3 elementos (objetos) del array, que está en la carpeta data y en un archivo llamado emails.json
  return emails.map((email) => {
    return (
      <EmailItem
        key={email.id}
        from={email.fromName}
        subject={email.subject}
        time={email.date}
      />
    );
  });

};

function App() {

  return (
    <div className="App">
      <Header />

      <table className="table">
        <tbody>
          {renderEmails()}
        </tbody>
      </table>

      <EmailReader 
        subject={emails[0].subject}
        fromName={emails[0].fromName}
        fromEmail={emails[0].fromEmail}
        body={emails[0].body}
      />
    </div>
  );
}

export default App;
