import sophie from "./sophie-hatter.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Mediacard</h1>
      </header>
      <main>
        <article className="card">
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
          <section className="card-body">
            <p className="card-text">
              Sophie Hatter is the female protagonist and heroine of the first
              book in the Castle Series, Howl's Moving Castle, and of the movie
              Howl's Moving Castle, directed by Hayao Miyazaki.
            </p>
            <p className="card-text">
              Sophie is a young woman living in the small town of Market
              Chipping in the kingdom of Ingary, and she is the eldest of three
              sisters. In the land of Ingary, this, of course, means that Sophie
              is destined to never find her fortune and live a dull life at
              home. She works in her late father's hat shop as her stepmother,
              Fanny Hatter's, apprentice.
            </p>
          </section>
          <footer className="card-footer">
            <p className="card-footer-text">Read more...</p>
            <div className="card-likes">
              <p className="card-number">37</p>
              <i class="fas fa-heart card-icon"></i>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default App;
