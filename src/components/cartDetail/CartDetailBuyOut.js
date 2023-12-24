import React from "react";
import { useCartContext, useCartFunctions } from "../../context/CartContext";
import { Waveform } from "@uiball/loaders/dist";


const CartDetailBuyOut = () => {

    const cartcontext = useCartContext();
    const cartFunction = useCartFunctions();
    return (
        <div className="price-box-container">
            <div className="card-wrapper">
                <div className="price-box-container__title">
                    <div className="card-header">
                        <h5 className="ticket-row__left-column--primary-text" id="productListCard"><span className="rich-text" id="product-rich-text">Resumen de compra</span></h5>
                    </div>

                </div>
                <div className="cards-price-box-row">
                    <div className="separator-ui"></div>
                    <div className="ticket-row" id="ticket_row_products_amount">
                        <div>
                            <span className="rich-text" id="buyout-rich-text">Productos ({cartFunction.QuantityCart})</span>
                        </div>
                        <div className="ticket-row__right-column">
                            <h6 className="ticket-row__right-column--primary-text"> <span className="rich-text" id="buyout-rich-text">{cartcontext === null && (
                                <Waveform
                                    size={25}
                                    lineWeight={3.5}
                                    speed={1}
                                    color="black"
                                />)}
                                {cartcontext != null && (
                                    <>{localStorage.getItem("tradecoin")} {cartFunction.sumTotalPriceCart()}</>
                                )}</span></h6>
                        </div>
                    </div>
                    <div className="ticket-row" id="ticket_row_shipping">
                        <div>
                            <span className="rich-text" id="packaging-rich-text">Envío </span>
                        </div>
                        <div className="ticket-row__right-column">
                            <h5 className="ticket-row__right-column--primary-text"><span className="rich-text-small" id="RIGHT-FREE-BUYOUT">Gratis</span></h5>
                        </div>
                    </div>
                    <div className="ticket-row" id="ticket_row_total">
                        <div>
                            <span className="rich-text" id="total-rich-text">Total</span>
                        </div>
                        <div className="ticket-row__right-column">

                            <h6 className="ticket-row__right-column--primary-text">  <span className="rich-text" id="total-rich-text">
                                {cartcontext === null && (
                                    <Waveform
                                        size={25}
                                        lineWeight={3.5}
                                        speed={1}
                                        color="black"
                                    />)}
                                {cartcontext != null && (
                                    <>{localStorage.getItem("tradecoin")} {cartFunction.sumTotalPriceCart()}</>
                                )}
                            </span>
                            </h6>
                        </div>
                    </div>

                </div>
                <div className="cards-checkout-box-row">
                    {cartcontext != null && (
                        <button className="andres-button container-button" id="checkoutButton">
                            <span className="span-container-btn">
                                <span className="span-text-btn" id="span-checkout"> Finalizar compra</span>
                            </span>
                        </button>)
                    }
                    {cartcontext === null && (
                        <button className="andres-button container-button" id="checkoutButton-disabled">
                            <span className="span-container-btn">
                                <span className="span-text-btn" id="span-checkout"> Finalizar compra</span>
                            </span>
                        </button>)
                    }
                </div>
            </div>
        </div>
    )
}

export default CartDetailBuyOut;