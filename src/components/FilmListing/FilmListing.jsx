import React from 'react';

import FilmRow from '../FilmRow/FilmRow'
import "./styles.scss";

const FilmListing = (props) => {
   const { filter, films, faves, tvShows,searchedList } = props; 
   let results;

   switch(filter){
      case 'movies':
        results = films;
        break; 
      case 'faves': 
        results =  faves;
        break; 
      case 'TV': 
        results = tvShows;
        break; 
      case 'searchedList': 
        results = searchedList;
        break; 
      default: 
        results = films;
  }

    const allFilms = results.map( (film) =>
      <FilmRow
        key={ film.id }
        film={ film }
        onFaveToggle={ () => props.onFaveToggle(film) }
        isFave={ props.faves.includes(film) }
        onDetailsClick={ () => props.onDetailsClick(film) }
      />
    )

    return (
      <div className="film-list">
        { allFilms }
      </div>
    );
}

export default FilmListing;
