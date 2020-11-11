import React from "react";
import "../stylesheets/App.scss";
import clubs from "../data/clubs.json";
import ClubList from "./ClubList";

class App extends React.Component {
  render() {
    console.log(clubs);
    return (
      <div>
        App
        <ClubList clubs={clubs} />
      </div>
    );
  }
}

export default App;
