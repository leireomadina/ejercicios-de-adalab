import React from 'react';

function EmailItem(props) {
  // props es un objeto de JS: es muy buena idea consolear antes del return las props para saber que está recibiendo cada componente
  // console.log(props);
  return (
    <tr className="cursor-pointer">
      <td>
        {/* react nos marca como error de accesibilidad si tenemos puesto un href="#", así que lo sustituimos por "/" */}
        <a href="/" className="text--decoration--none">
          {props.from}
        </a>
      </td>
      <td>
        <a href="/" className="text--decoration--none">
          {props.subject}
        </a>
      </td>
      <td>
        <a href="/" className="text--decoration--none">
          {props.time}
        </a>
      </td>
      <td className="text-align-right">
        <button className="form__btn fas fa-trash"></button>
      </td>
    </tr>
  );
}

export default EmailItem;
