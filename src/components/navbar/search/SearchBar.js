import { useRef } from "react";
import { Link } from "react-router-dom";
import search_png from "../../../img/search.png";
import { useSearchFunctions } from "../../../context/SearchContext";
import { useState } from "react";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const contextFunctions = useSearchFunctions();
    const searchRef = useRef();

    const handleChangeSearch = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="navItem" id="searchBar">
            <input
                type="text"
                placeholder="Buscar"
                className="searchInput"
                onChange={handleChangeSearch}
            />
            <button className='buttonItem' type="submit" value={searchTerm} onClick={contextFunctions.handleSearchProductsByInput}>
                <img className="items" src={search_png} alt="" />
            </button>
        </div>
    );
};

export default SearchBar;
