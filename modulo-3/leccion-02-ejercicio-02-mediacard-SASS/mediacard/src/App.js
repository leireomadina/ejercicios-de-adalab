import React from "react";
import sophie from "./sophie-hatter.jpg";
import "./App.scss";

class App extends React.Component {

  render() {
    const appTitle = (
      <header className="app__header">
        <h1 className="app__title">Mediacard</h1>
      </header>
    );

    const cardHeader = (
      <header className="card-header">
        <img
          className="card-image"
          alt="Imagen de Sophie Hatter"
          title="Imagen de Sophie Hatter"
          src={sophie}
        ></img>
        <div className="card-data">
          <h2 className="card-name">Sophie Hatter</h2>
          <p className="card-date">November 02, 2020</p>
        </div>
      </header>
    );

    const cardBody = (
      <section className="card-body">
        <p className="card-text">
          Sophie Hatter is the female protagonist and heroine of the first book
          in the Castle Series, Howl's Moving Castle, and of the movie Howl's
          Moving Castle, directed by Hayao Miyazaki.
        </p>
        <p className="card-text">
          Sophie is a young woman living in the small town of Market Chipping in
          the kingdom of Ingary, and she is the eldest of three sisters. In the
          land of Ingary, this, of course, means that Sophie is destined to
          never find her fortune and live a dull life at home. She works in her
          late father's hat shop as her stepmother, Fanny Hatter's, apprentice.
        </p>
      </section>
    );

    const cardFooter = (
      <footer className="card-footer">
        <p className="card-footer-text">Read more...</p>
        <div className="card-likes">
          <p className="card-number">37</p>
          <i class="fas fa-heart card-icon"></i>
        </div>
      </footer>
    );
    
    //creamos una constante que englobe toda la tarjeta 
    const cardContainer =(
        <main>
          <article className="card">
            {cardHeader}
            {cardBody}
            {cardFooter}
          </article>
        </main>
    );

    //constante que contiene a toda la app, incluyendo el header/título "Mediacard" y toda la tarjeta dentro de su contenedor
    const appRoot = (
      <div className="app">
        {appTitle}
        {cardContainer}
      </div>
    );

    // Hacemos que el return nos devuelva solo una variable, la que contiene a toda la app
    return appRoot;
  }
}

export default App;
