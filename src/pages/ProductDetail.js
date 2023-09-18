import React, { useState, useEffect } from "react";
import "../css/ProductDetail.css"
import "../css/htmltags.css"
import { getImages } from "../api/apiFuntions";

const ProductDetail = (productSelected) => {
    const [product, setProduct] = useState([]);

    const fetchImage = async () => {
        const productDetail = productSelected.productSelected
        const res = await getImages(productDetail.Image)
        const url = await res.url;
        setProduct({
            ...productDetail,
            Image: url});
    };
    
    useEffect(() => {
        fetchImage();
    }, []);




    return (
        <div className="ProductDetailContainer">
            <div className="ProductDetail">
                <div className="ProductImages">
                    <img src={product.Image} alt={product.Title} />

                </div>

                <div className="ProductInfo">
                    <div className="ProductInfoTitle">
                        <h2>{product.Title}</h2>
                    </div>
                    <div className="ProductReference">
                        <b>Ref. GU{product.idProduct}RF1</b>
                    </div>

                    <div className="ProductInfoPrice">

                        <span>${product.Price}</span>
                    </div>

                </div>

            </div>
            <div className="ProductInfoSize">
                <h3>Talle</h3>
                <div className="ProductSize">
                    <div className="ProductSizeItem">
                        <h1 for="s">S</h1>
                    </div>
                </div>
            </div>

            <div className="ProductDescription">
                <h1>{product.Description}</h1>
            </div>
        </div>
    )
}
export default ProductDetail;