import React from "react";

class EmailReader extends React.Component {
    constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    // console.log("Me han clickado con el evento", event);
    this.forceUpdate();
  }
  render() {  
    // Es buena práctica pintar aquí las props para ver qué información estamos pasando
    // console.log(this.props);
    return (
      <div>
        <div className="col2 mt-1 pt-1">
          <div>
            <h2 className="title--meidum">{this.props.subject}</h2>
            <h3 className="title--small">
              <span className="text--bold display-inline-block mr-1">
                {this.props.fromName}
              </span>
              <span className="text-normal display-inline-block">
                &lt;{this.props.fromEmail}&gt;
              </span>
            </h3>
          </div>
          <div className="text-align-right">
            {/* react nos marca como error de accesibilidad si tenemos puesto un href="#", así que lo sustituimos por "/" */}
            <a href="/">
              <button className="fas fa-times-circle form__btn"></button>
            </a>
            <a href="/">
              <button className="fas fa-trash form__btn"></button>
            </a>
          </div>
        </div>

        <p>{this.props.body}</p>

        <div className="mt-1">
          <button className="form__btn" onClick={this.handleClick}>
            <span className="fas fa-reply"></span>
            Responder
          </button>

          <button className="form__btn">
            <span className="fas fa-reply-all"></span>
            Responder a todos
          </button>

          <button className="form__btn">
            <span className="fas fa-share"></span>
            Reenviar a todos
          </button>
        </div>
      </div>
    );
  }
}

export default EmailReader;
