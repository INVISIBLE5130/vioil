import React from "react";
import './Search.css'
import SearchSVG from '../../assets/searchIcon.svg'

function Search() {
    return (
        <section className="search">
            <img src={SearchSVG} alt="Search icon" className="search-icon"/>
            <input
                type="text"
                className="search-input"
                placeholder={'Введіть ім’я'}
            />
            <button className="search-button">
                Пошук
            </button>
        </section>
    )
}

export default Search