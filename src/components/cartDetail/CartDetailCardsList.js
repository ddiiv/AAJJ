import React from "react";
import { useCartContext } from "../../context/CartContext.js";
import CartDetailCard from "./CartDetailCard.js";
import { useState } from "react";
import { useEffect } from "react";
import CartDetailBuyOut from "./CartDetailBuyOut.js";
import ShoppingBagEmpty from "./ShoppingBagEmpty.js";

const CartDetailCardsList = () => {
    const cartcontext = useCartContext();
    const [products, setProducts] = useState(null)

    useEffect(() => {
        function setProductOfCartContext() {
            if (cartcontext.IdCartItem !== 0) {
                setProducts(cartcontext)

            }
            else {
                setProducts(null)
            }
        }
        setProductOfCartContext()
    }, [cartcontext, products])

    function checkCartQuantity() {
        if (products !== null) {
            return (
                <>
                    <div className="card-wrapper">
                        <div className="cards-container">
                            <div className="cards-list">
                                <div className="card-wrapper">
                                    <div className="card__card">
                                        <div className="card-header">
                                            <h5 className="ticket-row__left-column--primary-text" id="productListCard"><span className="rich-text" id="product-rich-text">Productos</span></h5>

                                        </div>
                                        <div className="separator-ui"></div>
                                        {products?.map((cartProductIn) => {
                                            return (
                                                <>
                                                    <CartDetailCard key={cartProductIn.IdCartItem} cartProductIn={cartProductIn} />
                                                </>
                                            )
                                        })
                                        }


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
                            <CartDetailBuyOut />
                        </div>
                    </div>
                </>
            )
        }
        else {
            return (
                <ShoppingBagEmpty />
            )
        }
    }



    return (
        <>
            {checkCartQuantity()}
        </>
    )
}
export default CartDetailCardsList;