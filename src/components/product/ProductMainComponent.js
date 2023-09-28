import React from "react";
import ModalAddProducts from "./Modal";
import Search from "./Search";
import CatalogP from "./CatalogProducts";
import './ProductMainComponent.css'

function ProductMainComponent() {

return (

        <div className="container">
            {/* <Search /> */}
            <h2 className="title">{"Catalgo de Productos"}</h2>
            <div className="buttons">
            <ModalAddProducts/>
            </div>
            <div className="catalog">
            <CatalogP />
            </div>
        </div>

);
}

export default ProductMainComponent;
