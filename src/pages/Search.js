import CardList from "../components/CardList";
import Filters from "../components/Filters";

import { useSearchContext } from "../context/SearchContext.js";

import '../css/CategoryCatalog.css'




const Search = () => {
    const contextSearch = useSearchContext();
        console.log(contextSearch)
    return (
        <div className="catalog">
            <div className="products">
                <CardList props={contextSearch} />
            </div>
            <aside>
                <Filters />
            </aside>
        </div>);
}

export default Search;