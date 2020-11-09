import React from 'react';

class ProfesList extends React.Component {
  render() {
    // Primero definimos un array vacía
    let html = [];
    // Hacemos un bucle for para recorrer la lista de profesores, a la cual accedemos por props
    for (let i = 0; i < this.props.list.length; i++) {
      // Hacemos push sobre cada elemento del array. Añadir el atributo key para que cada item tenga un identificador único.
      let eachTeacher = this.props.list[i];
      html.push(
      <li key={i} id={i}>{eachTeacher}</li>
      )
    }

  // También podemos usar un MAP en lugar de un buble for clásico
  /*
    const html = this.props.list.map(
      function(profeItem, i) {
      return (
        <li key={i}>{profeItem}</li>
        );
      });
      return html;
  */

    return (
      <div className="profes_list">
        <h3>{this.props.title}</h3>
        <ul>
          {html}
        </ul>
      </div>
    );
  }
}

export default ProfesList;
