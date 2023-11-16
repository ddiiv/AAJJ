import React, { useEffect, useState } from "react"
import { getProductsByCategory } from "../api/apiFunctions"
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/CategoryCatalog.css'

const CategoryCatalog = (categorySelected) => {

  const [listProduct, setListProduct] = useState([])

  /* ------------------GetProducts useEffect------------------*/
  useEffect(() => {
    const getProductByCategorySelected = async () => {

      try {
        const products = await getProductsByCategory(categorySelected)

        setListProduct(products)

      } catch (error) {
        throw new Error('Error al obtener los productos de la API. Error: ' + error)
      }
    }
    getProductByCategorySelected()
  }, [categorySelected])

  

  return (
    <main className="page">
      <div className="containerPage" >
        <div className="catalog">
          <aside>
            <Filters />
          </aside>
          <main className="products">
            <CardList props={listProduct} />
          </main>

        </div>
      </div>
    </main>
  );
}

export default CategoryCatalog;