import React from 'react';

const handlerAlert = event => {
  // para acceder al valor del textarea usaremos event.target.value
  const usersText = event.target.value;
  // si el texto escrito por el usuario contiene la palabra "cebolla" saldrá nuestra alerta
  if(usersText.includes("cebolla")) {
  alert("ODIO LA CEBOLLA");
  }
}

class OnionHater extends React.Component {

  render() {

    return (
      <div>
        {/* queremos escuchar un evento desde el textarea: usaremos el evento change */}
        <textarea placeholder="Holi, cuéntame algo sobre las cebollas :)" onChange={handlerAlert} className="textarea"></textarea>
      </div>
    );
  }
}

export default OnionHater;
