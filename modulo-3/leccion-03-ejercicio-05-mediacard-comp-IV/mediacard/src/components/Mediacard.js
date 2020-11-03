import React from "react";

const Mediacard = (props) => {
  return (
    <article className="card">
      <header className="card-header">
        <img
          className="card-image"
          alt="Imagen de Sophie Hatter"
          title="Imagen de Sophie Hatter"
          src={props.image}
        ></img>
        <div className="card-data">
          <h2 className="card-name">{props.name}</h2>
          <p className="card-date">{props.date}</p>
        </div>
      </header>
      <section className="card-body">
        <p className="card-text">{props.text1}</p>
        <p className="card-text">{props.text2}</p>
      </section>
      <footer className="card-footer">
        <p className="card-footer-text">Read more...</p>
        <div className="card-likes">
          <p className="card-number">{props.likes}</p>
          {/* <i class="fas fa-heart card-icon"></i> */}
          <p className="card-icon">{props.heart}</p>
        </div>
      </footer>
    </article>
  );
};

export default Mediacard;
