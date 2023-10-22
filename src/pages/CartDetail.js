import React from "react";
import '../css/CartDetail.css'
import CartDetailCardsList from "../components/cartDetail/CartDetailCardsList";

const CartDetail = () => {




    return (

        <main className="page">
            <div className="containerPage">
                <div className="card-wrapper">
                    <div className="cards-container">
                        <CartDetailCardsList />
                    </div>
                </div>


                <div className="price-box-container">
                    <div className="price-box-container__title">
                        <span className="rich-text"></span>
                    </div>
                    <div className="separator-ui"></div>
                    <div className="cards-price-box-row">

                    </div>
                    <button className="card-price-box-button"></button>
                </div>
            </div>
        </main>
    )



}
export default CartDetail;