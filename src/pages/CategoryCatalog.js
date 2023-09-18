import React,{ useEffect, useState } from "react"
import { getProductsByCategory} from "../api/apiFuntions"
import { BrowserRouter as Routes, Link} from "react-router-dom";
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import '../css/CategoryCatalog.css'


const CategoryCatalog = (categorySelected) => {

  const [listProduct, setListProduct] = useState([])

  /* ------------------GetProducts useEffect------------------*/ 
useEffect(() => {
    const getProductByCategorySelected = async () => {  

      try{
      const products=  await getProductsByCategory(categorySelected)
      setListProduct(products)

    } catch (error) {
      throw new Error('Error al obtener los productos de la API. Error: ' + error)
    }
  }
  getProductByCategorySelected()
  },[categorySelected])



return (
    <div className="catalog">
        <div className="products">
        <CardList props={listProduct} />
      </div>
      <aside>
        <Filters/>
      </aside>
    </div>


    

);
}

export default CategoryCatalog;