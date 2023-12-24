import React from "react";


const TitleProduct = ({ product }) => {

    function setlocalcoin() {
        const number = product.Price;

        if (localStorage.getItem("geoLocation-country") === "AR") {
            const formattedPrice = new Intl.NumberFormat("AR", { style: 'currency', currency: 'ARS' }).format(number);
            return formattedPrice;
        }
        else {
            let priceUsd = sessionStorage.getItem("USD-BLUE");
            const formattedPrice = new Intl.NumberFormat("US", { style: 'currency', currency: 'USD' }).format(number / priceUsd);
            return formattedPrice;
        }

    }
    return (
        <>
            <div className="ProductInfoTitle">
                <h2>{product.Title}</h2>
            </div>
            <div className="ProductReference">
                <b>Ref. GU{product.idProduct}RF1</b>
            </div>

            <div className="ProductInfoPrice">

                <span className="rich-text price" id="product-rich-text">{setlocalcoin()}</span>
            </div></>
    )
}
export default TitleProduct;