import React from 'react';
import "./styles.scss";

const FilmDetails = (props) => {
  const { film } = props; 
  const backdropUrl = `https://image.tmdb.org/t/p/w1280/${film.backdrop_path}`;
  const posterUrl = `https://image.tmdb.org/t/p/w780/${film.poster_path}`;
  
  let details = film && film.id ?  
    <div className="film-detail is-hydrated">
      <figure className="film-backdrop">
        <img src={backdropUrl} alt="" />
        <h1 className="film-title">{film.title}</h1>
      </figure>

      <div className="film-meta">
        <h2 className="film-tagline">{film.tagline}</h2>
        <p className="film-detail-overview">
          <img src={posterUrl} className="film-detail-poster" alt="" />
          {film.overview}
        </p>
      </div>
    </div> : 
    <p>
      <i className="material-icons">subscriptions</i>
      <span>No film selected</span>
    </p>

    return (
      <div className="film-details">
        <div className="film-detail">
          {details} 
        </div>
      </div>
    );
}

export default FilmDetails;
