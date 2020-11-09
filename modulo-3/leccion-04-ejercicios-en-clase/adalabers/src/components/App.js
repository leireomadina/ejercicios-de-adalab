import React from 'react';
import '../stylesheets/App.css';
import Weather from './Weather';
import Today from './Today';
import Tweet from './Tweet';
import ProfesList from './ProfesList';

class App extends React.Component {
  render() {

    // Definimos un objeto que pasaremos al componente Tweet (similar a pasar props, pero ahora las pasamos como un objeto)
    const tweetInfo = {
      twitterAccount: "igarridoatwork",
      tweetMessage: "Vamos a por React!!!",
    };
    const profesoresList = ["Miguel", "Dayana", "Iván"];
    const titleTeachers = "Profesores";

    let queTiempoHaceHoy;
    if (Math.random() > 0.5) {
      queTiempoHaceHoy = "nuboso";
    }
    else {
      queTiempoHaceHoy = "soleado";
    }

    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">Componentes: Lista de Adalabers</h1>
        </header>
        <aside className="topBanner">
          <Weather text={queTiempoHaceHoy} />
          {/* buena práctica poner los valores numéricos entre corchetes para que ya sean values de tipo number y no haga falta hacer parteInt en un futuro */}
          <Today day={5} month={1} year={2020} />
          {/* Creamos dentro de tweetData una constante para no meter directamente ahí el objeto con la info a pasar al componente Tweet */}
          <Tweet tweetData={tweetInfo}/>
          {/* Pasamos como props un array: lo hacemos como una variable para tener mayor claridad y limpieza */}
          <ProfesList list={profesoresList} title={titleTeachers}/>
        </aside>
      </div>
    );
  }
}

export default App;
