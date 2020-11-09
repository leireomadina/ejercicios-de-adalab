import React from 'react';
import '../stylesheets/AdalaberDetail.scss'


class AdalaberDetail extends React.Component {

  render() {

    const githubURL = `https://github.com/${this.props.github}`;

    return (
      <li className="listing__item">
      <h3 className="listing__item--title" onClick={this.handleClickTitle}>
        {this.props.name}
      </h3>
      <div>
        <div className="listing__item--imageContainer">
          <img className="listing__item--image" src="http://placekitten.com//250" alt="Foto de perfil"/>
        </div>
        <span>Promo-{this.props.promo} </span>
        <span>
          <a href={githubURL} target="_blank" rel="noreferrer">
            GitHub {githubURL}
          </a>
        </span>
      </div>
    </li>
    );
  }
}

export default AdalaberDetail;
