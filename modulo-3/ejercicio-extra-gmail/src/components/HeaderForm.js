import React from "react";

function HeaderForm(props) {
  const handleClick = event => {
    event.preventDefault();
    console.log(props);
    // llamamos al método presente en su componente madre Header (lifting):
    props.handleInboxFilter();
  };
  return (
      <form className="text-align-right">
        <button className="form__btn" onClick={handleClick}>
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
  );
}

export default HeaderForm;
