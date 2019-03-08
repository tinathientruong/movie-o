import React from 'react';

const FilmPoster = (props) => {
    return (
      <img src={ `https://image.tmdb.org/t/p/w780/${props.poster_path }` } alt="" />
    );
}

export default FilmPoster;
