import React from 'react';
import Mediacard from './Mediacard';
import "../stylesheets/App.css";
import sophie from '../images/sophie-hatter.jpg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mediacard</h1>
      </header>
      <main>
        <Mediacard
        name="Sophie Hatter"
        date="November 02, 2020"
        image={sophie}
        text1="Sophie Hatter is the female protagonist and heroine of the first book in the Castle Series, Howl's Moving Castle, and of the movie Howl's Moving Castle, directed by Hayao Miyazaki."
        text2="Sophie is a young woman living in the small town of Market
        Chipping in the kingdom of Ingary, and she is the eldest of three
        sisters. In the land of Ingary, this, of course, means that Sophie
        is destined to never find her fortune and live a dull life at
        home. She works in her late father's hat shop as her stepmother,
        Fanny Hatter's, apprentice."
        likes="37"
        /* 
        Duda: ¿cómo hacer lo del corazón relleno o no usando font awesome?
        */
       heart="❤️"
        />
      </main>
    </div>
  );
}

export default App;
