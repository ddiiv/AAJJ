import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import search_png from "../../../img/search.png";

import { getProducts } from '../../../api/apiFuntions.js';
import { SearchContext } from "../../../context/SearchContext.js";

const SearchBar = () => {
    const [search, setSearch] = useState('');
    const handleChange = e => setSearch(e.target.value);
    const searchInput = useRef()
    const { searchProducts, setSearchProducts } = useContext(SearchContext);

    useEffect(() => setSearchProducts(getProducts()), [])
    useEffect(() => {
    }, [])

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
                className="navItem"
                value={search}
                onChange={handleChange}
                ref={searchInput} />
            <Link to={`/search`}><img className="items" src={search_png} alt=""/></Link>
        </div>
    )
}

export default SearchBar;