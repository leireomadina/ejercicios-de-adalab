import React from "react";

const Form = (props) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // función para que este hijo Form avise a su madre App de que ha cambiado algo
    props.handleInput(name, value);
    // console.log("Escucho", props.handleInput);
    console.log(name, value);
  };

  return (
    <div>
      <form>
        {/* NOMBRE */}
        <div>
          <label htmlFor="title">Nombre:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={props.title}
            onChange={handleInputChange}
          />
        </div>
        {/* DESCRIPCIÓN */}
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={props.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        {/* IDIOMA */}
        <div>
          <label htmlFor="language">Idioma:</label>
          <select
            value={props.language}
            onChange={handleInputChange}
            name="language"
          >
            <option value="español">
              Español
            </option>
            <option value="inglés">Inglés</option>
            <option value="portugués">Portugués</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;
