import React, { useEffect, useState } from "react"
import maradona from "../img/bichologo.png"
import Filters from "../components/Filters";
import '../css/CategoryCatalog.css'
import { useProductContext } from "../context/ProductContext";
import Card from "../components/Card";
import NoProductsAvailable from "../components/NoProductsAvaible";
import { Link } from "react-router-dom";
import CatalogMembersBanner from "../img/catalogimg-members.png"

const Indumentary = () => {
    const ProductContext = useProductContext();
    const [cont, setCont] = useState(2.5);

    useEffect(() => {

        setCont(2.5)
        const intervalo = setInterval(() => {
            setCont((prevContador) => (prevContador > 0 ? prevContador - 1 : 0));
        }, 1000);

        return () => clearInterval(intervalo);
    }, [])

    function loading() {
        while (cont > 1) {
            return <>
                <div className="MainScreenLock">
                    <div className="center-img_maradona">
                        <img className="maradona-loading_reactive" alt="maradona-loading" src={maradona} />
                    </div>
                </div>
            </>
        }

    }

    function NoProductsAvailableNow() {
        if (ProductContext) {
            return (
                <>
                    <main className="products">

                        {ProductContext?.map(product => {
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
        <>
            {loading()}
            <main id='catalog'>
                <section className="catalog__container--header">
                    <div className="catalog__container--header-content">
                        <img className="catalog__container--header-banner" src={CatalogMembersBanner} alt="catalog-Banner" />
                    </div>
                </section>
                <section className="navigation-section__container">
                    <div className="navigation__container--content">
                        <ol className="links-redirection__navigator">
                            <li className="linkToRedirect__navigator" id="category-catalog"> <Link className="navigatorLink" to="/"> Home </Link> </li>
                            {">"}
                            <li className="linkToRedirect__navigator unavailable" id="category-catalog">Indumentaria</li>
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
        </>
    );
}

export default Indumentary;