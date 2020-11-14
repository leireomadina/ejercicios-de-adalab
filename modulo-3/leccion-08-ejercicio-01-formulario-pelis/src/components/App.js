import "../stylesheets/App.scss";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
      age: "",
      genre: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const eventId = event.target.name;
    const eventValue = event.target.value;
    this.setState({
      [eventId]: eventValue,
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Formulario para pelis</h1>
        </header>
        <main>
          <section>
            <form>

               {/* NOMBRE */}
              <div>  
                <label htmlFor="title">Nombre:</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Ej: nombre"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>

              {/* DESCRIPCIÓN */}
              <div>
                <label htmlFor="description">Descripción:</label>
                <textarea
                  id="description"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                ></textarea>
              </div>

              {/* IDIOMA */}
              <div>
                <label htmlFor="language">Idioma:</label>
                <select
                  value={this.state.language}
                  onChange={this.handleChange}
                  name="language"
                >
                  <option value="español" selected>
                    Español
                  </option>
                  <option value="inglés" >Inglés</option>
                  <option value="portugués" >Portugués</option>
                </select>
              </div>

              {/* CLASIFICACIÓN POR EDADES */}
              <div>
                <p>Clasificación por edades:</p>
                <label htmlFor="age">
                  <input type="radio" id="age" value="all" name="age" checked />
                  Todos los públicos
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="7" name="age" />7
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="12" name="age" />
                  12
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="16" name="age" />
                  16
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="18" name="age" />
                  18
                </label>
              </div>

              {/* GÉNERO */}
              <div>
                <p>Género:</p>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="comedy" />
                  Comedia
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="drama" />
                  Drama
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="fantasy" />
                  Fantasía
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="action" />
                  Acción
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="family" />
                  Familia
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="terror" />
                  Terror
                </label>
              </div>
            </form>
          </section>
          <section>
            <article>
              <h2>{this.state.title}</h2>
              <p>{this.state.description}</p>
              <p>{this.state.language}</p>
              <p>Clasificación por edades</p>
              <p>Género</p>
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
