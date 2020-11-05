import React from "react";

// EJERCICIO 1: teníamos la función handler fuera de la class OnionHater
/*
const handlerAlert = (event) => {
  // para acceder al valor del textarea usaremos event.target.value
  const usersText = event.target.value;
  // si el texto escrito por el usuario contiene la palabra "cebolla" saldrá nuestra alerta
  if (usersText.includes("cebolla")) {
    alert("ODIO LA CEBOLLA");
  }
};
*/

class OnionHater extends React.Component {
  // incluimos el constructor para  asegurarnos de que el this que usará con la función handler es el this que queremos:
  constructor(props) {
    super(props);
    // para ello usamos el método bind: este handler irá asociado siempre a nuestro componente OnionHater
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(event) {
    // incluimos el método forceUpdate para que cada vez que se active el evento se vuelva a ejecutar render
    this.forceUpdate();
    // para acceder al valor del textarea usaremos event.target.value
    const usersText = event.target.value;
    // si el texto escrito por el usuario contiene la palabra "cebolla" saldrá nuestra alerta
    if (usersText.includes("cebolla")) {
      alert("ODIO LA CEBOLLA");
    }
  };

  render() {
    return (
      <form className="container">
        {/* queremos escuchar un evento desde el textarea: usaremos el evento change */}
        <textarea
          placeholder="Holi, cuéntame algo sobre las cebollas :)"
          // incluimos el this ahora que el handler está dentro de nuestra clase OnionHater
          onChange={this.handleAlert}
          className="textarea"
          name="textarea"
          id="textarea"
        ></textarea>
      </form>
    );
  }
}

export default OnionHater;
