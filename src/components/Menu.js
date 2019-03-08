import React from 'react';



const Menu = (props) => {
    return (
        <div className="menu">
            <div className="menu__searchbar">
            <input name="searchBar" type="text" placeholder="Search..." onChange={props.getUserInput}/>
                <button className="menu__searchbar__icon material-icons" onClick={(e) => props.searchClick(e)}> search</button>
            </div>
            <ul class="menu__links">
                <li><button onClick={ () => props.onFilterClick('movies') }>New Movie Releases ({props.films.length})</button></li>
                <li><button onClick={ () => props.onFilterClick('faves') }>Favourites ({props.faves.length})</button></li>
                <li><button onClick={ () => props.onFilterClick('TV') }>TV Shows ({props.tvShows.length})</button></li>
            </ul>
        </div>
    )
}

export default Menu; 
