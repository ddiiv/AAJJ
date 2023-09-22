import React,{ useEffect, useState } from "react"
import CardList from "../components/CardList";
import Filters from "../components/Filters";
import '../css/CategoryCatalog.css'

import { SearchContext } from "../context/SearchContext.js";


const Search = () => {
    const {searchProducts} = React.useContext(SearchContext);
    const [listProduct, setListProduct] = useState()

  /* ------------------GetProducts useEffect------------------*/ 
    useEffect(() => {setListProduct(searchProducts)},[])
    console.log(searchProducts)
    return (
    <div className="catalog">
        <div className="products">
            <CardList props={listProduct} />
        </div>
        <aside>
            <Filters/>
        </aside>
    </div>);
}

export default Search;