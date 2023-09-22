import React, { useState, useEffect } from "react";
import "../css/ProductDetail.css"
import "../css/htmltags.css"
import { getImages,getSizesByIdProduct } from "../api/apiFuntions";
import ImagesProduct from "../components/productDetail/ImagesProduct";
import TitleProduct from "../components/productDetail/TitleProduct";
import DescriptionProduct from "../components/productDetail/DescriptionProduct";
import SizesProduct from "../components/productDetail/SizesProduct";

const ProductDetail = (productSelected) => {
    const [product, setProduct] = useState([]);
    const productDetail = productSelected.productSelected
    const [size, setSize] =  useState([]);
    const fetchImage = async () => {
        const res = await getImages(productDetail.Image)
        const url = await res.url;
        setProduct({
            ...productDetail,
            Image: url});
    };
    const fetchSizes = async () => {
        const res = await fetch(`http://localhost:3001/sizes/product/${productDetail.idProduct}`)
        const data = await res.json();
        setSize(data);
    }
    
    useEffect(() => {

        fetchSizes();
        fetchImage();
    }, []);


    return (
        <div className="ProductDetailContainer">
            <div className="ProductDetail">
               <ImagesProduct imageurl={product.Image} />
                <div className="ProductInfo">
                    <TitleProduct product={product} />
                </div>

            </div>
            <div className="ProductInfoSize">
|               <SizesProduct idProductS={productDetail.idProduct}/>
            </div>

        <DescriptionProduct product={product} />

        </div>
    )
}
export default ProductDetail;