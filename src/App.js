import React, { Component } from 'react';
// import './App.scss';

import FilmListing from './components/FilmListing/FilmListing'
import FilmDetails from './components/FilmDetails/FilmDetails'
import Header from './components/Header/Header'

import TMDB from './TMDB'

class App extends Component {

  state = {
    films: [],
    faves: [],
    current: {},
    tvShows: [], 
    filter: 'movies',
    searchedList: [],
    searchValue: ''
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

  handleSearchClick = (e) => {
    e.preventDefault(); 

    const filmFilteredList = this.state.films.filter(film =>
        film.title.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
     );

     const tvFilteredList = this.state.tvShows.filter(show =>
        show.name.toLocaleLowerCase().includes(this.state.searchValue.toLocaleLowerCase())
     );

     const totalFilteredList = filmFilteredList.concat(tvFilteredList); 

     this.setState({
       filter: 'searchedList', 
       searchedList: totalFilteredList
      })
  }

  getUserInput = (e) => {
    e.preventDefault(); 
    this.setState({ searchValue: e.target.value });
  }

  render() {
    const { films, faves, current, tvShows, filter, searchedList } = this.state
    return (
      <div className="film-library">
        <Header 
          films = { films }
          faves = { faves }
          tvShows = { tvShows }
          onFilterClick = { this.handleFilterClick }
          onSearchClick = { this.handleSearchClick }
          getUserInput = { this.getUserInput }
        />
        <FilmListing
          films={ films }
          faves={ faves }
          tvShows= { tvShows }
          searchedList= { searchedList }
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
