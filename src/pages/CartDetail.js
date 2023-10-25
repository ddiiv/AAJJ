import React from "react";
import '../css/CartDetail.css'
import CartDetailCardsList from "../components/cartDetail/CartDetailCardsList";
import { useUserContext } from "../context/UserContext";
import HaveToLogin from "../components/HaveToLogin";

const CartDetail = () => {

    const userContext = useUserContext();

    function isLogged() {
        if (userContext) {

            return (
                <>
                    <div className="card-wrapper">
                        <div className="cards-container">
                            <CartDetailCardsList />

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
                    </div>



                </>
            )
        }
        else {
            return (

                <HaveToLogin />
            );

        }

    }

    return (
        <main className="page" id="cartDetail">
            <div className="containerPage" id="cartDetail">
                {isLogged()}
            </div>
        </main>
    )



}
export default CartDetail;