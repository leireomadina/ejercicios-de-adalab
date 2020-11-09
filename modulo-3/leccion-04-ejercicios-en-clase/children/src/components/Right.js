import React from 'react';
import '../stylesheets/Right.scss'

class Right extends React.Component {
  render() {
    return (
      <section className="right">
        {this.props.children}
      </section>
    );
  }
}

export default Right;
