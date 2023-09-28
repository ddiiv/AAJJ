import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import search_png from "../../../img/search.png";

import { getProducts } from '../../../api/apiFunctions.js';
import { SearchContext } from "../../../context/SearchContext.js";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const handleChange = e => setSearch(e.target.value);
    const searchInput = useRef()
    const { searchProducts, setSearchProducts } = useContext(SearchContext);

    useEffect(() => setSearchProducts(getProducts()), [])

    useEffect(() => { // Filtrar
        let list = [...searchProducts]
        if (search) {
            list = list.filter((example) => (
                example.title.toUpperCase().includes(searchInput.current.value.toUpperCase())
            ))
            console.log("LLEGUE")
        }
        setSearchProducts(list);
    }, [search])

    return (
        <div className="navItem" id="searchBar">
            <input placeholder="Buscar"
                className="searchInput"
                value={search}
                onChange={handleChange}
                ref={searchInput} />
            <button className='buttonItem'><Link to={`/search`} className="searchBAR"><img className="items" src={search_png} alt=""></img></Link></button>
        </div>
    )
}

export default SearchBar;