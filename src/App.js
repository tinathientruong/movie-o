import React, { Component } from 'react';
import './App.css';

import FilmListing from './components/FilmListing/FilmListing'
import FilmDetails from './components/FilmDetails/FilmDetails'
import Menu from './components/Menu/Menu'

import TMDB from './TMDB'

class App extends Component {

  state = {
    films: [],
    faves: [],
    current: {},
    tvShows: [], 
    filter: 'movies'
  }

  componentDidMount () {
      Promise.all([fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB.api_key}&language=en-US`), 
                  fetch(`https://api.themoviedb.org/3/tv/on_the_air?api_key=${TMDB.api_key}&language=en-US`)])
        .then(([response1, response2]) => Promise.all([response1.json(), response2.json()]))
        .then(([data1, data2]) => {
          this.setState({ films: data1.results });
          this.setState({ tvShows: data2.results });
      });
  }; 


  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)

    if (filmIndex > -1) {
      faves.splice(filmIndex, 1)
    }
    else {
      faves.push(film)
    }

    this.setState({ faves })
  }

  handleDetailsClick = film => {
    fetch(
      `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ current: data });
      });
  };

  handleFilterClick = (filter) => {
      this.setState({ filter })
  }

  render() {
    const { films, faves, current, tvShows, filter } = this.state
    return (
      <div className="film-library">
        <Menu 
          films = {films}
          faves = {faves}
          tvShows = {tvShows}
          onFilterClick = {this.handleFilterClick }
        />
        <FilmListing
          films={ films }
          faves={ faves }
          tvShows= { tvShows }
          onFaveToggle={ this.handleFaveToggle }
          onDetailsClick={ this.handleDetailsClick }
          filter = {filter}
        />
        <FilmDetails film={ current } />
      </div>
    );
  }
}

export default App;
