import React from "react";
import "../stylesheets/App.css";
import EmailItem from "./EmailItem";
import EmailReader from "./EmailReader";
import Header from "./Header";
// Nuestro array con objetos está en la carpeta data. "emails" no va en mayúsculas porque no es un componente
import apiEmails from "../data/emails.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // metemos los emails como estado porque en el futuro los cogeremos de una api
      emails: apiEmails,
      // almacenaremos aquí la info que el usuario escribe en el input
      inboxFilter: "",
    };
    this.handleInboxFilter = this.handleInboxFilter.bind(this);
    this.handleDeleteFilter = this.handleDeleteFilter.bind(this);
    this.handleTextFilter = this.handleTextFilter.bind(this);
  }

  // Es buena idea consolear aquí el state
  handleInboxFilter() {
    console.log("App: me han clickado en recibidos");
  }

  handleDeleteFilter() {
    console.log("App: me han clickado en papelera");
  }

  handleTextFilter(data) {
    console.log("App: me han clickado en campo de texto", data.value);
    // setState renderiza la página cada vez que el state es modificado
    this.setState({
      // la información que vamos a guardar aquí no depende del estado anterior, sino que vamos a machacar con el nuevo texto lo que haya en el this.state dentro del constructor
      inboxFilter: data.value,
    });
  }

  renderEmails() {
    const inboxFilter = this.state.inboxFilter.toLowerCase();
    return this.state.emails
      .filter((email) => {
        return (
          email.fromName.toLowerCase().includes(inboxFilter) ||
          email.subject.toLowerCase().includes(inboxFilter) ||
          email.body.toLowerCase().includes(inboxFilter)
        );
      })
      .map((email) => {
        return (
          <EmailItem
            key={email.id}
            from={email.fromName}
            subject={email.subject}
            time={email.date}
          />
        );
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Header
          handleInboxFilter={this.handleInboxFilter}
          handleDeleteFilter={this.handleDeleteFilter}
          handleTextFilter={this.handleTextFilter}
        />
        <p>La usuario está filtrando por: {this.state.inboxFilter}</p>

        <table className="table">
          <tbody>{this.renderEmails()}</tbody>
        </table>

        <EmailReader
          subject={this.state.emails[0].subject}
          fromName={this.state.emails[0].fromName}
          fromEmail={this.state.emails[0].fromEmail}
          body={this.state.emails[0].body}
        />
      </div>
    );
  }
}

export default App;
