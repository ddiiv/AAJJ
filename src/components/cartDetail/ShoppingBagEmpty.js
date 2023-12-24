import React from "react";
import { Link } from "react-router-dom";
import shoppingbagaajj from "../../img/shopping-bag-aajj.svg"

const ShoppingBagEmpty = () => {
    return (
        <div className="card-wrapper">
            <div className="cards-container">
                <div className="empty_state">
                    <div className="empty_img">
                        <img className="shoppingbagaajj" src={shoppingbagaajj} alt="shoppingbagaajj" />
                    </div>
                    <span className="rich-text" id="principal_text_cartempty"> Llena el carrito con productos para verlo !</span>
                    <span className="rich-text" id="secondary_text_cartempty">Añadi productos al carrito y te los mandamos</span>
                    <div className="item-link">
                                <Link to="/" className="link" id="emptylink_home">Comprar Ahora</Link>
                    </div>
                </div>
                <div className="price-box-container" id="--disabled">
                    <div className="price-box-container__title" id="--disabled">
                        <div className="card-header">
                            <h5 className="ticket-row__left-column--primary-text" id="productListCard"><span className="rich-text" id="secondary_text_cartempty">
                                Resumen de compra
                            </span></h5>

                        </div>
                        <div className="cards-price-box-row">
                            <div className="separator-ui"></div>
                            <div className="card__content">
                                <span className="rich-text" id="cartsummary__text">
                                    Aquí podrá ver el resumen de tu compra en cuanto añada productos al carrito
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ShoppingBagEmpty;