import React from "react";

const Form = (props) => {
  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    // función para que este hijo Form avise a su madre App de que ha cambiado algo
    props.handleInput(name, value);
    // console.log("Escucho", props.handleInput);
    // console.log(name, value);
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
         {/* CLASIFICACIÓN POR EDADES */}
         <div>
            <p>Clasificación por edades:</p>
            <label htmlFor="age">
              <input
                type="radio"
                id="age"
                value="Todos los públicos"
                name="age"
                onChange={handleInputChange}
              />
              Todos los públicos
            </label>
            <label htmlFor="age">
              <input
                type="radio"
                id="age"
                value="7"
                name="age"
                onChange={handleInputChange}
              />
              7
            </label>
            <label htmlFor="age">
              <input
                type="radio"
                id="age"
                value="12"
                name="age"
                onChange={handleInputChange}
              />
              12
            </label>
            <label htmlFor="age">
              <input
                type="radio"
                id="age"
                value="16"
                name="age"
                onChange={handleInputChange}
              />
              16
            </label>
            <label htmlFor="age">
              <input
                type="radio"
                id="age"
                value="18"
                name="age"
                onChange={handleInputChange}
              />
              18
            </label>
          </div>
           {/* GÉNERO */}
           <div>
            <p>Género:</p>
            <label htmlFor="genre">
              <input
                type="checkbox"
                id="genre"
                name="genre"
                value="Comedia"
                onChange={handleInputChange}
              />
              Comedia
            </label>
            <label htmlFor="genre">
              <input
                type="checkbox"
                id="genre"
                name="genre"
                value="Drama"
                onChange={handleInputChange}
              />
              Drama
            </label>
            <label htmlFor="genre">
              <input
                type="checkbox"
                id="genre"
                name="genre"
                value="Fantasía"
                onChange={handleInputChange}
              />
              Fantasía
            </label>
            <label htmlFor="genre">
              <input
                type="checkbox"
                id="genre"
                name="genre"
                value="Acción"
                onChange={handleInputChange}
              />
              Acción
            </label>
            <label htmlFor="genre">
              <input
                type="checkbox"
                id="genre"
                name="genre"
                value="Familia"
                onChange={handleInputChange}
              />
              Familia
            </label>
            <label htmlFor="genre">
              <input
                type="checkbox"
                id="genre"
                name="genre"
                value="Terror"
                onChange={handleInputChange}
              />
              Terror
            </label>
          </div>
      </form>
    </div>
  );
};

export default Form;
