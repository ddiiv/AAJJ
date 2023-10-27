import React from "react";
import '../css/CartDetail.css'
import CartDetailCardsList from "../components/cartDetail/CartDetailCardsList";
import { useUserContext } from "../context/UserContext";
import HaveToLogin from "../components/HaveToLogin";
import CartDetailBuyOut from "../components/cartDetail/CartDetailBuyOut";
const CartDetail = () => {

    const userContext = useUserContext();

    function isLogged() {
        if (userContext) {

            return (
                <>
                    <div className="card-wrapper">
                        <div className="cards-container">
                            <CartDetailCardsList />
                            <CartDetailBuyOut />
                            
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