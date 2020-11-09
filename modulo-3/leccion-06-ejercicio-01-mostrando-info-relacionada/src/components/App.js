import React from 'react';
import '../stylesheets/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // asociamos el evento a este componente de clase
    this.handleKeyUp = this.handleKeyUp.bind(this);
    // definimos el estado inicial del componente usando un objeto literal
    this.state = {
      text: ""
    };
  }

  handleKeyUp(event) {
    // recogemos lo que el usuario escribe en el input
    const inputText = event.target.value;
    this.inputText = inputText;
    console.log(inputText);
    // sustituimos el this.forceUpdate de los anteriores ejercicios por this.setState(): definimos qué sucede cuando el estado del input cambia, es decir, cuando su value cambia/cuando el usuario escriba algo
    this.setState({
      text: this.inputText
    });
  }

  render() {
    return (
      <div className="App">
        <label htmlFor="text">¿En qué estás pensando?</label>
        {/* usamos un evento de tipo keyUp */}
        <input type="text" id="text" name="text" onKeyUp={this.handleKeyUp} className="input"></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
