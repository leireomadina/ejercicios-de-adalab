import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <article className="card">
        <h2>{this.state.title}</h2>
        <p>{this.state.description}</p>
        <p>{this.state.language}</p>
        <p>{this.state.age}</p>
        <p>{this.state.genre}</p>
      </article>
    );
  }
}

export default Card;
