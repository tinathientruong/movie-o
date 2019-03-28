import React from 'react';
import "./styles.scss";


const Header = (props) => {
    return (
        <header className="globalHeader">
                <div className="globalHeader__searchbar">
                    <input name="searchBar" type="text" placeholder="Search..." onChange={props.getUserInput}/>
                    <button className="globalHeader__btn material-icons" onClick={(e) => props.onSearchClick(e)}> search</button>
                </div>
                <nav className="globalNav">
                    <ul class="globalNav__links">
                        <li><a onClick={ () => props.onFilterClick('movies') }>New Movie Releases ({props.films.length})</a></li>
                        <li><a onClick={ () => props.onFilterClick('TV') }> New TV Shows ({props.tvShows.length})</a></li>
                        <li><a onClick={ () => props.onFilterClick('faves') }>Favourites ({props.faves.length})</a></li>
                    </ul>
                </nav>
        </header>
    )
}

export default Header; 
