import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../../api/apiFunctions";

const HighlightCard = ({ product }) => {
    const [products, setProducts] = useState([]);
    const getImageProduct = async () => {
        try {
            const staticProduct = product
            const res = await getImage(staticProduct.Image)
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
            <div className="product-card" key={products.idProduct}>
                <div className="badge"></div>
                <div className="product-tumb">
                    <img src={products.Image} alt="Producto" />
                </div>
                <div className="product-details">
                    <span className="product-catagory"><b className="gender">{products.SubCategory}</b></span>
                    <h4> <Link className="nothing" to={`/product/${products.Title}`}><h1 className="title">{products.Title}</h1> </Link></h4>
                    <p><h4 className="description"> {products.Description}</h4> </p>
                    <div className="product-bottom-details">
                        <div className="product-price"><span className="price">${products.Price}</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HighlightCard;