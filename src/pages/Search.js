import CardList from "../components/CardList";
import Filters from "../components/Filters";

import { useSearchContext } from "../context/SearchContext.js";
import '../css/CategoryCatalog.css'

const Search = () => {
    const contextSearch = useSearchContext();
    return (
        <main className="page">
            <div className="containerPage" >
                <div className="catalog">
                    <aside className="filter_catalog--container">
                        <Filters />
                    </aside>
                    <main className="products">
                        <CardList props={contextSearch} />
                    </main>

                </div>
            </div>
        </main>
    );
}

export default Search;