import React, { useState, useEffect } from "react";
import "../css/ProductDetail.css"
import "../css/htmltags.css"

const ProductDetail = (productSelected) => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const productDetail = productSelected.productSelected
        if (productDetail && productDetail.Image) {
            fetch(`http://localhost:3001/img/${productDetail.Image}`)
                .then(response => response.url)
                .then((data) => {

                    setProduct({
                        ...productDetail,
                        Image: data,
                    });
                    console.log(data)
                })
                .catch((error) => {
                    console.error('Error al obtener la URL de la imagen:', error);
                }
                );
        }
        else {
            console.log("No hay Producto Seleccionado")
        }


    }, [productSelected.productSelected])





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