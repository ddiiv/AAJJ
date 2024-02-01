import Card from "../components/Card.js";
import Filters from "../components/Filters";
import NoProductsAvailable from "../components/NoProductsAvaible.js";
import { useSearchContext } from "../context/SearchContext.js";
import '../css/CategoryCatalog.css'

const Search = () => {
    const contextSearch = useSearchContext();
    function NoProductsAvailableNow() {
        if (contextSearch?.length !== 0) {
            return (
                <>
                    <main className="products">

                        {contextSearch?.map(product => {
                            console.log(product)
                            return (
                                <Card product={product} key={product.idProduct} />
                            )
                        })
                        }
                    </main>
                </>
            )
        }
        else {
            return <NoProductsAvailable />
        }
    }
    return (
        <div className="catalog">
            <aside className="filter_catalog--container">
                <Filters />
            </aside>
            {NoProductsAvailableNow()}
        </div>
    );
}

export default Search;