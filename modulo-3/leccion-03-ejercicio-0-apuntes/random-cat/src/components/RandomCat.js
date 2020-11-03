import React from "react";

class RandomCat extends React.Component {
  render() {
    return (
      <a href="http://lorempixel.com" target="_blank" rel="noreferrer">
        <img src="http://lorempixel.com/400/200/cats/" alt="Random cat" />
      </a>
    );
  }
}

export default RandomCat;
