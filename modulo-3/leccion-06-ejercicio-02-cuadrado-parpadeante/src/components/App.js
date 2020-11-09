import '../stylesheets/App.scss';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      color: "blue"
    }
  }

  handleClick(event) {
    this.setState({
      color: "red"
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className={`square square-${this.state.color}`} onClick={this.handleClick}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
