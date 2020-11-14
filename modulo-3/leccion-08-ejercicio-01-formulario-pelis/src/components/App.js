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
    const target = event.target;
    const value = target.value;
    const name = target.name;
    //asociamos dentro del estado cada name del form con cada value
    this.setState({
      [name]: value,
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
                  <input type="radio" id="age" value="Todos los públicos" name="age" onChange={this.handleChange}/>
                  Todos los públicos
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="7" name="age" onChange={this.handleChange}/>7
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="12" name="age" onChange={this.handleChange}/>
                  12
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="16" name="age" onChange={this.handleChange}/>
                  16
                </label>
                <label htmlFor="age">
                  <input type="radio" id="age" value="18" name="age" onChange={this.handleChange}/>
                  18
                </label>
              </div>

              {/* GÉNERO */}
              <div>
                <p>Género:</p>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="Comedia" onChange={this.handleChange} />
                  Comedia
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="Drama" onChange={this.handleChange}/>
                  Drama
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="Fantasía" onChange={this.handleChange}/>
                  Fantasía
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="Acción" onChange={this.handleChange} />
                  Acción
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="Familia" onChange={this.handleChange} />
                  Familia
                </label>
                <label htmlFor="genre">
                  <input type="checkbox" id="genre" name="genre" value="Terror" onChange={this.handleChange} />
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
              <p>{this.state.age}</p>
              <p>{this.state.genre}</p>
            </article>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
