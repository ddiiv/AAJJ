import React, { useState, useEffect } from "react";
import { getImage } from "../../api/apiFunctions";
import { Link } from "react-router-dom";

const CartDetailCard = ({ cartProductIn }) => {
    const [product, setProducts] = useState([]);
    const getImageProduct = async () => {
        try {
            const staticProduct = cartProductIn
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
    }, [cartProductIn])

    return (
        <>
       
            <div className="item-row" key={product.IdCartItem}>

                <div className="item-col item-img">
                    <img src={product.Image} alt="Producto" />
                </div>
                <div className="item-col item-name">
                    <span>{product.Title}</span>
                </div>
                <div className="item-col item-price">
                    <span>${product.Price}</span>
                </div>
                <div className="item-col item-quantity">
                    <span>{cartProductIn.quantity}</span>
                </div>
                <div className="item-col item-total">
                    <span>${product.Price * cartProductIn.quantity}</span>
                </div>
                <div className="item-col item-remove">
                    <button className="remove-btn">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>
         
            <div className="separator-ui"></div>
        </>
    )
}
export default CartDetailCard;