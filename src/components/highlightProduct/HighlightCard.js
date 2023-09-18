import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes, Link } from "react-router-dom";
import { getImages } from "../../api/apiFuntions";

const HighlightCard = ({ product }) => {
    const [products, setProducts] = useState([]);
    const getImageProduct = async () => {
        try {
            const staticProduct = product
            const res = await getImages(staticProduct.Image)
            const url = await res.url;
            setProducts({
                ...staticProduct,
                Image: url
            });
        } catch (error) {
            throw new Error('Error al obtener los productos de la API. Error: ' + error)
        }
    }
    useEffect(() => {
        getImageProduct()
    }, [])
    return (
        <>
            <Link className="LinkConteiner" to={`/product=/${products.Title}`}>
                <div className="CardHighList" key={products.IdProduct}>
                    <img src={products.Image} className="productImgHighList" alt="Producto" />
                    <div className="container">
                        <div className="genderContainer">
                            <b className="gender">{products.SubCategory}</b>
                        </div>
                        <div className="TitleContainer">
                            <h1 className="title">{products.Title}</h1>
                        </div>
                        <div className="priceContainer">
                            <span className="price">${products.Price}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
export default HighlightCard;