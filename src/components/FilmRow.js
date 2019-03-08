import React from 'react';

import FilmPoster from './FilmPoster'
import Fave from '../Fave'

const FilmRow = (props) => {
    const {film} = props
    const year = film.release_date ? new Date(film.release_date).getFullYear(): new Date(film.first_air_date).getFullYear();
    const title = film.title ? film.title : film.name;

    return (
      <div className="film-row" onClick={props.onDetailsClick } >
        <FilmPoster poster_path={film.poster_path } />

        <div className="film-summary">
          <h1>{title}</h1>
          <p>{ year }</p>
        </div>

        <Fave
          onFaveToggle={props.onFaveToggle }
          isFave={ props.isFave }
        />
      </div>
    );
}

export default FilmRow;
