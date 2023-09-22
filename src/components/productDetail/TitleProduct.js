import React from "react";

const TitleProduct = ({ product }) => {
    return (
        <>
            <div className="ProductInfoTitle">
                <h2>{product.Title}</h2>
            </div>
            <div className="ProductReference">
                <b>Ref. GU{product.idProduct}RF1</b>
            </div>

            <div className="ProductInfoPrice">

                <span>${product.Price}</span>
            </div></>
    )
}
export default TitleProduct;