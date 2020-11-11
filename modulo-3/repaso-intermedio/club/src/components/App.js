import React from "react";
// import React, { useState } from "react";
import "../stylesheets/App.scss";
import clubs from "../data/clubs.json";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(clubs);
    return <div classnameName="App"></div>;
  }
}

export default App;
