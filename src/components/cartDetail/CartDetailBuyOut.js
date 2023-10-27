import React from "react";
import { useCartContext } from "../../context/CartContext";
const CartDetailBuyOut = () => {

    const cartcontext = useCartContext();
    console.log(cartcontext)

    return (
        <div className="price-box-container">
            <div className="card-wrapper">
                <div className="price-box-container__title">
                    <div className="card-header">
                        <h5 className="ticket-row__left-column--primary-text" id="productListCard"><span className="rich-text" id="product-rich-text">Resumen de compra</span></h5>
                    </div>

                </div>

                <div className="separator-ui"></div>
                <div className="cards-price-box-row">
                </div>
            </div>
        </div>
    )
}

export default CartDetailBuyOut;