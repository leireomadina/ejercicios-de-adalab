import "../stylesheets/App.scss";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    // definimos el estado inicial: cuadrado de color azul construido con un objeto literal
    this.state = {
      color: "blue",
    };
  }

  handleClick() {
    // le pasamos a setState un callback o función  con dos parámetros:  prevState (el estado que vamos a modificar) y props (las del componente)
    this.setState((prevState, props) => {
      // esta variable definirá cual será el siguiente color o estado del cuadrado
      let nextColor;
      if (prevState.color === "blue") {
        nextColor = "red";
      } else {
        nextColor = "blue";
      }
      // devolvemos un objeto literal con la clave/nombre del estado (color) a cambiar: nos aseguramos de que el cuadrado podrá alternar entre los dos colores sin errores
      return { color: nextColor };
    });
  }

  /*
  // lo mismo que lo anterior pero con función ARROW 
  handleClick() {
    this.setState((prevState, props) => ({
      color: prevState.color === "blue" ? "red" : "blue",
    }));
  }
  */

  render() {
    const backgroundClass = this.state.color;
    return (
      <div className="App">
        <div className="container">
          <div
            className={`square square-${backgroundClass}`}
            onClick={this.handleClick}
          ></div>
        </div>
      </div>
    );
  }
}

export default App;
