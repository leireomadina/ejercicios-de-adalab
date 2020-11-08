import React from "react";

function HeaderForm(props) {

  const handleInboxFilter = event => {
    event.preventDefault();
    // llamamos al método presente en su componente madre Header (lifting):
    props.handleInboxFilter();
  };

  const handleDeleteFilter = event => {
    event.preventDefault();
    props.handleDeleteFilter();
  };

  const handleTextFilter = event => {
    event.preventDefault();
    // pasamos el value del input como un objeto
    props.handleTextFilter({
      value: event.target.value
    });
  };

  return (
      <form className="text-align-right">
        <button className="form__btn" onClick={handleInboxFilter}>
          <span className="fas fa-inbox"></span>
          Recibidos
        </button>
        <button className="form__btn" onClick={handleDeleteFilter}>
          <span className="fas fa-trash"></span>
          Papelera
        </button>
        <input
          className="form__input-text"
          type="text"
          placeholder="Buscar un correo"
          onKeyUp={handleTextFilter}
        />
        {/* los elementos con solo etiqueta de inicio tiene que llevar un / de cierre al final, sino nos dará error */}
      </form>
  );
}

export default HeaderForm;
