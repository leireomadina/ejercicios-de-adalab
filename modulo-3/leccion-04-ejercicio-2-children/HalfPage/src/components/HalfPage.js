import React from "react";

class HalfPage extends React.Component {
  render() {
    return (
      // metemos una segunda clase al div contenido dentro de un prop para poder personalizar cada componente HalfPage por separado 
      <div className={`background background-${this.props.styles}`}>
        {this.props.children}
      </div>
    );
  }
}

export default HalfPage;