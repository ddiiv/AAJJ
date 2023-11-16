import CardList from "../components/CardList";
import Filters from "../components/Filters";

import { useSearchContext } from "../context/SearchContext.js";

import '../css/CategoryCatalog.css'




const Search = () => {
    const contextSearch = useSearchContext();
    console.log(contextSearch)
    return (

        <main className="page">
            <div className="containerPage" >
                <div className="catalog">
                    <aside>
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