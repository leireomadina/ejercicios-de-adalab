import React from "react";

const Card = (props) => {
  console.log(props);
    return (
      <article className="card">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p>{props.language}</p>
        <p>{props.age}</p>
        <p>{props.genre}</p>
      </article>
    );
  }

export default Card;
