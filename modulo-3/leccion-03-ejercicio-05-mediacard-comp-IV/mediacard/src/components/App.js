import React from "react";
import MediaList from "./MediaList";
import "../stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mediacard</h1>
      </header>
      <main>
        <MediaList />
      </main>
    </div>
  );
}

export default App;
