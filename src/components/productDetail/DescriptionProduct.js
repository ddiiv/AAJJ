import React from "react";


const DescriptionProduct = ({ product }) => {
    return (
        <>

            <div className="ProductDescription">
                <span className="DescriptionProduct">Descripción</span>
                <h1 className="descriptionBox_Product">{product.Description}</h1>
            </div>
        </>
    )
}
export default DescriptionProduct;