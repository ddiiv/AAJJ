import React from "react";
import { useCartContext } from "../../context/CartContext.js";
import CartDetailCard from "./CartDetailCard.js";
import { useState } from "react";
import { useEffect } from "react";

const CartDetailCardsList = () => {
    const cartcontext = useCartContext();
    
    const [products, setProducts] = useState([])
    function setProductOfCartContext ()
    {
        if(cartcontext)
        {
            setProducts(cartcontext)
        }
        
    }
    useEffect(() => {
        setProductOfCartContext()
    
    }, [])

    console.log(products)

    return (
        <>
            <div className="cards-list">
                <div className="card-header">
                    Carrito
                </div>
                <div className="separator-ui"></div>

                {products?.map(cartProduct =>
                (
                    <>
                        <CartDetailCard key={cartProduct.IdCartItem} cartProductIn={cartProduct} />
                    </>
                ))}


            </div>
            <div className="card-footer">
                <div className="ticket-row">
                </div>
            </div>
        </>
    )
}
export default CartDetailCardsList;