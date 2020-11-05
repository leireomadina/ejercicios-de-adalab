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

//EJERCICIO 3: metemos la función handler dentro del componente de clase

class OnionHater extends React.Component {
  // incluimos el constructor para  asegurarnos de que el this que usará con la función handler es el this que queremos: para ello usamos el método bind, con lo que este handler irá asociado siempre a nuestro componente OnionHater
  constructor(props) {
    super(props);
    this.handleAlert = this.handleAlert.bind(this);
    // Guardaremos la información de si estamos odiando o no
    this.isHating = false;
  }

  handleAlert(event) {
    // incluimos el método forceUpdate para que cada vez que se active el evento se vuelva a ejecutar render
    this.forceUpdate();
    // seleccionamos el contenedor que ocupa toda la página y cuyo fondo cambiará a color rojo
    const container = document.querySelector(".container");
    // para acceder al valor del textarea usaremos event.target.value
    const usersText = event.target.value;
    // usamos el método toLowerCase para que funcionen tanto mayúsculas como minúsculas (convertimos si son mayus en minus)
    const usersTexLowerCase = usersText.toLowerCase();
      // si el texto escrito por el usuario contiene la palabra "cebolla" el fondo de la página se volverá rojo, y cuando se borre volverá al fondo blanco por defecto
    if (usersTexLowerCase.includes("cebolla")) {
      container.classList.add("container-alert");
      this.ishating = true;
      // alert("ODIO LA CEBOLLA");
    } else {
      this.ishating = false;
      container.classList.remove("container-alert");
    }
  };

  render() {
    return (
      <form className="container">
        <textarea
          placeholder="Holi, cuéntame algo sobre las cebollas :)"
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
