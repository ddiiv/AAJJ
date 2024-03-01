import React, { useEffect, useState } from "react"
import maradona from "../img/bichologo.png"
import Filters from "../components/Filters";
import '../css/CategoryCatalog.css'
import { useProductFunctions } from "../context/ProductContext";
import Card from "../components/Card";
import NoProductsAvailable from "../components/NoProductsAvaible";
import { Link } from "react-router-dom";
import CatalogMembersBanner from "../img/catalogimg-members.png"

const SubCategory = ({ subCategorySelected }) => {
  const ProductFunctions = useProductFunctions();
  const [cont, setCont] = useState(2.5);

  useEffect(() => {
    ProductFunctions.getProductBySubCategorySelected(subCategorySelected?.IdSubCategory)
    setCont(2.5)
    const intervalo = setInterval(() => {
      setCont((prevContador) => (prevContador > 0 ? prevContador - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalo); 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subCategorySelected?.IdSubCategory])


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

    if (ProductFunctions.filteredProducts?.length !== 0) {
      return (
        <>
          <main className="products">

            {ProductFunctions.filteredProducts?.map(product => {
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
              <li className="linkToRedirect__navigator" id="category-catalog"> <Link className="navigatorLink" to="/indumentaria"> Indumentaria </Link> </li>
              {">"}
              <li className="linkToRedirect__navigator unavailable" id="category-catalog">{subCategorySelected.SubCategory}</li>
            </ol>
          </div>
        </section>
        <div className="catalog">
          <aside className="filter_catalog--container">
            <Filters filterToQuit={subCategorySelected.SubCategory} />
          </aside>
          {NoProductsAvailableNow()}
        </div>
      </main>
    </>
  );
}

export default SubCategory;