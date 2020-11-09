import React from 'react';
import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    // asociamos el evento a este componente de clase
    this.handleChange = this.handleChange.bind(this);
    // definimos el estado inicial del componente usando un objeto literal (vacío)
    this.state = {
      text: ""
    };
  }

  handleChange(event) {
    // recogemos lo que el usuario escribe en el input
    const inputText = event.target.value;
    // sustituimos el this.forceUpdate de los anteriores ejercicios por this.setState(): definimos qué sucede cuando el estado del input cambia, es decir, cuando su value cambia/cuando el usuario escriba algo
    this.setState({
      text: inputText
    });
  }

  render() {
    const usersText = this.state.text;
    return (
      <div className="App">
        <label htmlFor="text">¿En qué estás pensando?</label>
        {/* usamos un evento de tipo Change */}
        <input type="text" id="text" name="text" onChange={this.handleChange} className="input"></input>
        <p className="paragraph">{usersText}</p>
      </div>
    );
  }
}

export default App;
