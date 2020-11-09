import React from 'react';
import PropTypes from 'prop-types';

class Today extends React.Component {
  render() {
    // Puede ser interesante en algunos casos meter las props como variables, sobre todo cuando necesitemos hacer cálculos. Pero en este caso es un poco redundante.
    const dayNumber = this.props.day;
    const monthNumber = this.props.month;
    const yearNumber = this.props.year;

    let monthName = "";
    if (monthNumber === 1) {
      monthName = "enero";
    } else if (monthNumber === 2) {
      monthName = "febrero";
    } else if (monthNumber === 3) {
      monthName = "marzo";
    } else if (monthNumber === 4) {
      monthName = "abril";
    } else if (monthNumber === 5) {
      monthName = "mayo";
    } else if (monthNumber === 6) {
      monthName = "junio";
    } else if (monthNumber === 7) {
      monthName = "julio";
    } else if (monthNumber === 8) {
      monthName = "agosto";
    } else if (monthNumber === 9) {
      monthName = "septiembre";
    } else if (monthNumber === 10) {
      monthName = "octubre";
    } else if (monthNumber === 11) {
      monthName = "noviembre";
    } else if (monthNumber === 12) {
      monthName = "diciembre";
    }

    return (
      <div className="today">
        Hoy es {dayNumber} de {monthName} de {yearNumber}
      </div>
    );
  }
}

Today.defaultProps = {
  month: 11,
  // En el componente App hemos quitado el atributo year para que funcione éste por defecto:
  year: 2020
}

// Definimos que las tres props son de tipo number: si como prop por ej. pasamos un string nos dará un error. No olvidarse de importar Proptypes.
Today.propTypes = {
  day: PropTypes.number.isRequired,
  month: PropTypes.number,
  year: PropTypes.number
}

export default Today;
