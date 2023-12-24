import React, { useEffect } from "react"

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
  },[categorySelected])

  

  return (
    <main className="page">
      <div className="containerPage" >
        <div className="catalog">
          <aside className="filter_catalog--container">
            <Filters />
          </aside>
          <main className="products">
            <CardList props={ProductFunctions?.listProduct} />
          </main>

        </div>
      </div>
    </main>
  );
}

export default CategoryCatalog;