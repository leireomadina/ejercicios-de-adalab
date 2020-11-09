import React from 'react';

class Tweet extends React.Component {

  render() {
    return (
      <div className="tweet">
        {/* Accedemos a las propiedades del objeto definido en la constante tweetInfo en el archivo App */}
        <em>@{this.props.tweetData.twitterAccount}</em>
        <br />
        <pre>
          {this.props.tweetData.tweetMessage}
        </pre>
      </div>
    );
  }
}

export default Tweet;
