import React, { useEffect, useState } from "react"
import maradona from "../img/bichologo.png"
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CategoryCatalog.css'
import { useProductFunctions } from "../context/ProductContext";

const CategoryCatalog = (categorySelected) => {
  const ProductFunctions = useProductFunctions();

  const [cont, setCont] = useState(2.5);
  useEffect(() => {

    ProductFunctions.getProductByCategorySelected(categorySelected)
    // eslint-disable-next-line react-hooks/exhaustive-deps

    setCont(2.5)
    const intervalo = setInterval(() => {
      setCont((prevContador) => (prevContador > 0 ? prevContador - 1 : 0));
    }, 1000);

    return () => clearInterval(intervalo);
  }, [categorySelected])

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
  return (
    <>
    {loading()}
      <div className="catalog">
        <aside className="filter_catalog--container">
          <Filters />
        </aside>
        <main className="products">
          <CardList props={ProductFunctions?.listProduct} />
        </main>

      </div>
    </>
  );
}

export default CategoryCatalog;