import search_png from "../../../img/search.png";
import { useSearchFunctions } from "../../../context/SearchContext";
import { Link } from "react-router-dom";

const SearchBar = () => {

    const contextFunctions = useSearchFunctions();


    return (
        <div className="navItem" id="searchBar">
            <input
                type="text"
                placeholder="Buscar"
                className="searchInput"
                onChange={contextFunctions.handleChangeSearch}
            />

            <button className='buttonItem' type="submit" value={contextFunctions.searchInput} onClick={contextFunctions.handleSearchProductsByInput} >
                <Link to={`/search=?${contextFunctions.searchInput}`} className="nothing"><img className="items" src={search_png} alt="" /></Link>
            </button>
        </div>
    );
};

export default SearchBar;
