import "../stylesheets/App.css";

function App() {
  return (
    <div className="App">
      <header className="col2 mb-1">
        <div>
          <h1 className="title">
            <span className="fas fa-envelope-open-text"></span>
            Gmail
          </h1>
        </div>

        <form className="text-align-right">
          <button className="form__btn">
            <span className="fas fa-inbox"></span>
            Recibidos
          </button>
          <button className="form__btn">
            <span className="fas fa-trash"></span>
            Papelera
          </button>
          <input
            className="form__input-text"
            type="text"
            placeholder="Buscar un correo"
          />
          {/* los elementos con solo etiqueta de inicio tiene que llevar un / de cierre al final, sino nos dará error */}
        </form>
      </header>

      <table className="table">
        <tbody>
          <tr className="cursor-pointer">
            <td>
              <a href="#" className="text--decoration--none">
                Front Fest
              </a>
            </td>
            <td>
              <a href="#" className="text--decoration--none">
                Entradas ya a la venta
              </a>
            </td>
            <td>
              <a href="#" className="text--decoration--none">
                15:27
              </a>
            </td>
            <td className="text-align-right">
              <button className="form__btn fas fa-trash"></button>
            </td>
          </tr>

          <tr className="cursor-pointer">
            <td>
              <a href="#" className="text--decoration--none">
                GitHub
              </a>
            </td>
            <td>
              <a href="#" className="text--decoration--none">
                Adalab/project-promo-i Local store #23
              </a>
            </td>
            <td>
              <a href="#" className="text--decoration--none">
                13:51
              </a>
            </td>
            <td className="text-align-right">
              <button className="form__btn fas fa-trash"></button>
            </td>
          </tr>

          <tr className="cursor-pointer">
            <td>
              <a href="#" className="text--decoration--none">
                Node Weekly
              </a>
            </td>
            <td>
              <a href="#" className="text--decoration--none">
                Node news
              </a>
            </td>
            <td>
              <a href="#" className="text--decoration--none">
                20:41
              </a>
            </td>
            <td className="text-align-right">
              <button className="form__btn fas fa-trash"></button>
            </td>
          </tr>
        </tbody>
      </table>

      <div>
        <div className="col2 mt-1 pt-1">
          <div>
            <h2 className="title--meidum">Entradas ya a la venta</h2>
            <h3 className="title--small">
              <span className="text--bold display-inline-block mr-1">
                Front Fest
              </span>
              <span className="text-normal display-inline-block">
                &lt;info@frontfest.org&gt;
              </span>
            </h3>
          </div>
          <div className="text-align-right">
            <a href="#">
              <button className="fas fa-times-circle form__btn"></button>
            </a>
            <a href="#">
              <button className="fas fa-trash form__btn"></button>
            </a>
          </div>
        </div>

        <p>
          FrontFest es un evento anual y sin ánimo de lucro. Está organizado y
          gestionado por un equipo de voluntarios y voluntarias que pertenecen a
          la comunidad de desarrollo frontend. Celebrado por primera vez en
          2017, pretende ser un punto de encuentro a nivel nacional,
          principalmente en castellano, para todas aquellas personas interesadas
          en las tecnologías de frontend, donde compartir experiencias y
          aprender acerca de las nuevas tendencias en el sector. Y por supuesto,
          acabar divirtiéndose en buena compañía.
        </p>

        <div className="mt-1">
          
          <button className="form__btn">
            <span className="fas fa-reply"></span>
            Responder
          </button>

          <button className="form__btn">
            <span className="fas fa-reply-all"></span>
            Responder a todos
          </button>

          <button className="form__btn">
            <span className="fas fa-share"></span>
            Reenviar a todos
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
