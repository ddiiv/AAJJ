import React from "react";
import { useCartContext } from "../../context/CartContext.js";
import CartDetailCard from "./CartDetailCard.js";
import { useState } from "react";
import { useEffect } from "react";

const CartDetailCardsList = () => {
    const cartcontext = useCartContext();
    const [products, setProducts] = useState([])

    useEffect(() => {
        function setProductOfCartContext() {
            if (cartcontext) {
                setProducts(cartcontext)

            }
            else {

            }
        }
        setProductOfCartContext()

    }, [cartcontext, products])



    return (
        <>
            <div className="cards-list">
                <div className="card-wrapper">
                    <div className="card__card">
                        <div className="card-header">
                                <h5 className="ticket-row__left-column--primary-text" id="productListCard"><span className="rich-text" id="product-rich-text">Productos</span></h5>
                            
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
                        <div className="ticket-row" id="ticket-row-1">

                            <div className="ticket-row__left-column">
                                <h5 className="ticket-row__left-column--primary-text"><span className="rich-text-small">Envío</span></h5>

                            </div>
                            <div className="ticket-right-column">
                                <h5 className="ticket-row__right-column--primary-text"><span className="rich-text-small" id="RIGHT-FREE">Gratis</span></h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default CartDetailCardsList;