import React from 'react';
import { isElementOfType } from 'react-dom/test-utils';

function EmailItem(props) {
  console.log(props);
  // props es un objeto de JS: es muy buena idea consolear antes del return las props para saber que está recibiendo cada componente


  let deletedClass = "";
  if(props.deleted === true) {
    deletedClass = ""
  }

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
