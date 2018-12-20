import React, { Component } from 'react';

import FilmRow from './FilmRow'

class FilmListing extends Component {

  state = {
    filter: 'all'
  }

  handleFilterClick = (filter) => {
    this.setState({ filter })
  }

  render() {
    const films = this.state.filter === 'faves' ? this.props.faves : this.props.films

    const allFilms = films.map( (film) =>
      <FilmRow
        key={ film.id }
        film={ film }
        onFaveToggle={ () => this.props.onFaveToggle(film) }
        isFave={ this.props.faves.includes(film) }
        onDetailsClick={ () => this.props.onDetailsClick(film) }
      />
    )

    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>

        <div className="film-list-filters">

          <div className={ `film-list-filter ${ this.state.filter === 'all' ? 'is-active' : '' }` } onClick={ () => this.handleFilterClick('all') }>
            ALL
            <span className="section-count">{ this.props.films.length }</span>
          </div>

          <div className={ `film-list-filter ${ this.state.filter === 'faves' ? 'is-active' : '' }` } onClick={ () => this.handleFilterClick('faves') } >
            FAVES
            <span className="section-count">{ this.props.faves.length }</span>
          </div>

        </div>

        { allFilms }
      </div>
    );
  }
}

export default FilmListing;
