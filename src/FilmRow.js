import React, { Component } from 'react';

import FilmPoster from './FilmPoster'
import Fave from './Fave'

class FilmRow extends Component {

  render() {
    const year = new Date(this.props.film.release_date).getFullYear()

    return (
      <div className="film-row" onClick={ this.props.onDetailsClick } >
        <FilmPoster poster_path={ this.props.film.poster_path } />

        <div className="film-summary">
          <h1>{ this.props.film.title }</h1>
          <p>{ year }</p>
        </div>

        <Fave
          onFaveToggle={ this.props.onFaveToggle }
          isFave={ this.props.isFave }
        />
      </div>
    );
  }
}

export default FilmRow;
