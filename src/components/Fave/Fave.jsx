import React, { Component } from 'react';
import "./styles.scss";

class Fave extends Component {

  handleClick = (e) => {
    e.stopPropagation()
    this.props.onFaveToggle()
  }

  render() {
    const isFave = this.props.isFave ? 'remove_from_queue' : 'add_to_queue'

    return (
      <button className={ `film-row-fave ${ isFave }` } onClick={ this.handleClick }>
        <p className="material-icons">{ isFave }</p>
      </button>
    );
  }
}

export default Fave;
