import React from 'react';
import "./styles.scss";

const Header = (props) => {
    // constants
    const OPEN = 'open';
    const HIDE = 'hide';

    // DOM elements
    const _html = document.querySelector('html');
    const _globalHeader = document.querySelector('.global-header');
    const _globalNavToggle = document.querySelector('.global-nav-toggle');

    const toggleMenu = (evt) => {
        evt.preventDefault();
        evt.stopPropagation();

        _globalHeader.classList.toggle(OPEN);
    }


    return (
        <header className="global-header">
            <div className="global-header-inner">
            <button className="global-nav-toggle" onClick={toggleMenu}>
                <div className="hamburger-wrapper">
                    <div class="hamburger-piece hamburger-top"></div>
                    <div class="hamburger-piece hamburger-middle"></div>
                    <div class="hamburger-piece hamburger-bottom"></div>
                </div>
                <span className="menu">Menu</span>
                <span className="menu-close">close</span>
            </button>
            <nav className="global-nav">
                <ul className="global-nav__list">
                    <li className="global-nav__item"><a onClick={ () => props.onFilterClick('movies') }>Films ({props.films.length})</a></li>
                    <li className="global-nav__item"><a onClick={ () => props.onFilterClick('TV') }> TV Shows ({props.tvShows.length})</a></li>
                    <li className="global-nav__item"><a onClick={ () => props.onFilterClick('faves') }>Favourites({props.faves.length})</a></li>
                </ul>
                <div className="global-nav__searchbar">
                    <input name="searchBar" type="text" placeholder="Search..." onChange={props.getUserInput}/>
                    <button className="global-header-search-btn material-icons" onClick={(e) => props.onSearchClick(e)}>search</button>
                </div>
            </nav>
            <a href="/" className="global-header__logo">M</a>
            </div>
        </header>
    )
}

export default Header; 
