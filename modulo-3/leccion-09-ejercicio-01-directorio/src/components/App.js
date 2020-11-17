import React from "react";
import "../stylesheets/App.scss";
import fetchRandomUser from "../service/RandomUserService";
import UserList from "./UserList";
import Filters from "./Filters";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      randomUserStore: [],
    };
  }

  fetchNewRandomUser() {
    fetchRandomUser().then((data) => {
      this.setState({
        randomUserStore: data.results,
      });
    });
  }

  render() {
    const { randomUserStore } = this.state;

    return (
      <div className="App">
        <main>
          <Filters />
          <UserList />
        </main>
      </div>
    );
  }
}

export default App;
