import { BrowserRouter as Routes, Link } from "react-router-dom";
import '../../css/NavBar.css'
import search_png from "../../img/search.png"
import { useSearchFunctions } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";


const BottomNav = ({ category }) => {
    const navigate = useNavigate();
    const contextFunctions = useSearchFunctions();
  
    const redurectSubmit =(event)=>{
       event.preventDefault();
       navigate(`/search=?${contextFunctions.searchInput}`);
    }

    return (
        <div className='nav-bottom_categories'>
            <div className="categories_container enabled">
                {category?.map((categories) => {
                    return <li className='nav-item' key={categories.IdCategory} ><Link to={`/category/${categories.Category}`} id="a" className='navItem'>{categories.Category}</Link></li>
                })}
            </div>
            <div className="serachbox_cotainer disabled">
                <div className="navItem disabled" id="searchBar">
                    <form className="serachBar__Form-Container" onSubmit={redurectSubmit}>
                        <button className='buttonItem' type="submit" value={contextFunctions.searchInput} onClick={contextFunctions.handleSearchProductsByInput} >
                            <Link to={`/search=?${contextFunctions.searchInput}`} className="nothing"><img className="items" src={search_png} alt="" /></Link>
                        </button>
                        <input
                            type="text"
                            placeholder="Buscar"
                            className="searchInput"
                            onChange={contextFunctions.handleChangeSearch}
                        />

                        
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BottomNav;