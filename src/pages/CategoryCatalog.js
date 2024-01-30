import React, { useEffect, useState } from "react"
import maradona from "../img/bichologo.png"
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CategoryCatalog.css'
import { useProductFunctions } from "../context/ProductContext";
const CategoryCatalog = (categorySelected) => {
  const ProductFunctions = useProductFunctions();
  /* ------------------GetProducts useEffect------------------*/
  useEffect(() => {
    ProductFunctions.getProductByCategorySelected(categorySelected)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categorySelected])
  const [cont, setCont] = useState(4);
  useEffect(() => {
    const intervalo = setInterval(() => {

      setCont((prevContador) => (prevContador > 0 ? prevContador - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  function loading() {
    if (cont === 0) {
      return <>
        <div className="catalog">
          <aside className="filter_catalog--container">
            <Filters />
          </aside>
          <main className="products">
            <CardList props={ProductFunctions?.listProduct} />
          </main>

        </div></>

    }
    else {
      return <>
        <div className="MainScreenLock">
          <div className="center-img_maradona">
            <img className="maradona-loading_reactive" alt="maradona-loading" src={maradona} />
          </div>
        </div>
      </>
    }
  }
  return (
    <>
      {loading()}
    </>
  );
}

export default CategoryCatalog;