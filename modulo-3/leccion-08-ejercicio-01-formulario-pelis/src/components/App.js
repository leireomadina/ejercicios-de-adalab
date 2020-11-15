import "../stylesheets/App.scss";
import React from "react";
import Card from "./Card";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
      age: "",
      genre: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //asociamos dentro del estado cada name del form con cada value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Formulario para pelis</h1>
        </header>
        <main>
          <section>
            <Form 
              // Pasamos las props a su hija Form
              title={this.state.title}
              description={this.state.description}
              language={this.state.language}
              age={this.state.age}
              genre={this.state.genre}
              // Lifting
              handleChange={this.handleChange}
            />
          </section>
          <section>
            <Card
              // Pasamos las props a su hija Card
              title={this.state.title}
              description={this.state.description}
              language={this.state.language}
              age={this.state.age}
              genre={this.state.genre}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
