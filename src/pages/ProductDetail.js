import React, { useState, useEffect } from "react";
import "../css/ProductDetail.css"
import { getImage } from "../api/apiFunctions";
import ImagesProduct from "../components/productDetail/ImagesProduct";
import TitleProduct from "../components/productDetail/TitleProduct";
import DescriptionProduct from "../components/productDetail/DescriptionProduct";
import SizesProduct from "../components/productDetail/SizesProduct";
import Recommended from "../components/productDetail/Recommended";

const ProductDetail = ({ productSelected }) => {
    const [product, setProduct] = useState([]);
    const productDetail = productSelected
    
    const fetchImage = async () => {
        const res = await getImage(productDetail.Image)
        const url = await res.url;
        setProduct({
            ...productDetail,
            Image: url
        });
    };


    useEffect(() => {
        fetchImage();
    });


    return (
        <div className="page">
            <div className="containerPage">
                <div className="ProductDetailContainer">
                    <div className="ProductDetail">
                        <ImagesProduct imageurl={product.Image} />
                        <div className="ProductInfo">
                            <TitleProduct product={product} />

                            <div className="ProductInfoSize">
                                <h3 className="sizeTitle">Talles disponibles</h3>
                            </div>
                            <li className="ProductSizeItem" >
                                <SizesProduct idProductS={productDetail.idProduct} />
                            </li>
                        </div>
                    </div>


                    <DescriptionProduct product={product} />
                    
                </div>
            </div>
            <div className="recommended_container">
            <Recommended />
            </div>
        </div>

    )
}
export default ProductDetail;