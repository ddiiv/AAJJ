import React from "react";
import '../css/CartDetail.css'
import { useUserContext } from "../context/UserContext";
import CartDetailCardsList from "../components/cartDetail/CartDetailCardsList";
import HaveToLogin from "../components/HaveToLogin";


const CartDetail = () => {

    const userContext = useUserContext();
    function isLogged() {
        if (userContext) {

            return (
                <>
                    <CartDetailCardsList />
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