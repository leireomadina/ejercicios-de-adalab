import React from 'react';

class Weather extends React.Component {

  render() {
    return (
      <div className="weather">
        <p>Hoy está {this.props.text}</p>
      </div>
    );
  }
}

export default Weather;
