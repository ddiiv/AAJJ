import search_png from "../../../img/search.png";
import { useSearchFunctions } from "../../../context/SearchContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const navigate = useNavigate();
    const contextFunctions = useSearchFunctions();
  
    const redurectSubmit =(event)=>{
       event.preventDefault();
       navigate(`/search=?${contextFunctions.searchInput}`);
    }

   return (
       <div className="navItem enabled" id="searchBar">
           <form className="serachBar__Form-Container" onSubmit={redurectSubmit}>
               <input
                  type="text"
                  placeholder="Buscar"
                  className="searchInput"
                  onChange={contextFunctions.handleChangeSearch}
               />

               <button className='buttonItem' type="submit" value={contextFunctions.searchInput} onClick={contextFunctions.handleSearchProductsByInput} >
                  <Link to={`/search=?${contextFunctions.searchInput}`} className="nothing"><img className="items" src={search_png} alt="" /></Link>
               </button>
               
           </form>
       </div>
   );
};

export default SearchBar;