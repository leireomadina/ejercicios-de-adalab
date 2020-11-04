import '../stylesheets/App.css';
import HalfPage from './HalfPage';
import React from "react";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HalfPage
          >
          <div>
            <h1>Lorem Ipsum</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend leo, dapibus porta purus euismod eu. Nunc convallis ullamcorper accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, leo a molestie efficitur, lacus magna condimentum nisl, id dapibus orci massa ac eros. Nunc id sagittis nisi. Praesent ligula turpis, venenatis sit amet ante non, dignissim consequat velit. Curabitur vel pharetra est. Curabitur id magna metus.
            </p>
          </div>
        </HalfPage>
        <HalfPage
        // queremos que este componente tenga el background blanco
          styles="white"
        >
          <div>
            <h1>Lorem Ipsum II</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dictum eleifend leo, dapibus porta purus euismod eu. Nunc convallis ullamcorper accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum, leo a molestie efficitur, lacus magna condimentum nisl, id dapibus orci massa ac eros. Nunc id sagittis nisi. Praesent ligula turpis, venenatis sit amet ante non, dignissim consequat velit. Curabitur vel pharetra est. Curabitur id magna metus.
            </p>
          </div>
        </HalfPage>
      </div>
    );
  }
}

export default App;
