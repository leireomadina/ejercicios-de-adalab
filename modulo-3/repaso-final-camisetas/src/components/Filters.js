import React from 'react';

const Filters = (props) => {
  // EVENTO
  const handleFilter = (ev) => {
    // Es responsabilidad de este componente recibir la información del evento, y no de App (no subir entero la info del ev)
    // Ejecutamos la función proveniente de App (lifting) cuando se produce el evento
    props.handleFilter(ev.target.value);
  };

  return (
    <form className="mb-1">
      <label className="form__label" htmlFor="name">
        Filtrar por nombre:
      </label>
      <input className="form__input-text" type="text" id="name" onChange={handleFilter} />
    </form>
  );
};

export default Filters;
