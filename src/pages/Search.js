import { Link } from "react-router-dom";
import Card from "../components/Card.js";
import Filters from "../components/Filters";
import NoProductsAvailable from "../components/NoProductsAvaible.js";
import { useSearchContext, useSearchFunctions } from "../context/SearchContext.js";
import '../css/CategoryCatalog.css'

const Search = () => {
    const contextSearch = useSearchContext();
    const contextSearchFunctions = useSearchFunctions();
    function NoProductsAvailableNow() {
        if (contextSearch?.length !== 0) {
            return (
                <>
                    <main className="products">

                        {contextSearch?.map(product => {
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
        <main id='catalog'>
            <section className="navigation-section__container">
                <div className="navigation__container--content">
                    <ol className="links-redirection__navigator">
                        <li className="linkToRedirect__navigator" id="category-catalog"> <Link className="navigatorLink" to="/"> Home </Link> </li>
                        {">"}
                        <li className="linkToRedirect__navigator unavailable" id="category-catalog">Busqueda de : "{contextSearchFunctions?.searchByInput}"</li>
                    </ol>
                </div>
            </section>
            <div className="catalog">
                <aside className="filter_catalog--container">
                    <Filters />
                </aside>
                {NoProductsAvailableNow()}
            </div>
        </main>
    );
}

export default Search;