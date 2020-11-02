import React from 'react';

class Mediacard extends React.Component {

  render() {
    return (
      <article className="card">
          <header className="card-header">
            <img
              className="card-image"
              alt="Imagen de Sophie Hatter"
              title="Imagen de Sophie Hatter"
              src={this.props.image}
            ></img>
            <div className="card-data">
              <h2 className="card-name">{this.props.name}</h2>
              <p className="card-date">{this.props.date}</p>
            </div>
          </header>
          <section className="card-body">
            <p className="card-text">
              {this.props.text1}
            </p>
            <p className="card-text">
            {this.props.text2}
            </p>
          </section>
          <footer className="card-footer">
            <p className="card-footer-text">Read more...</p>
            <div className="card-likes">
              <p className="card-number">{this.props.likes}</p>
              <i class="fas fa-heart card-icon"></i>
            </div>
          </footer>
        </article>
    )
  }
}

export default Mediacard;