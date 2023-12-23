import React from "react";
import cartImage from '../../img/carro.png'
import { useCartContext, useCartFunctions } from "../../context/CartContext";
import { Link, Outlet } from "react-router-dom";
import { useUserLogged } from "../../context/UserContext";
const Cart = () => {
    const cart = useCartContext();
    const cartFunctions = useCartFunctions();
    const usercontext = useUserLogged();


    function NumberQuantityItems() {
        if (cart?.IdCartItem !== 0) {
            return (
                <b className="cartItemsQuantity">{cartFunctions?.QuantityCart}</b>
            )

        }
        else {
            return (
                <></>
            )
        }
    }

    function showCart() {

        if (usercontext.Logged === true)
            return (
                <>
                    <Link to='/cartdetail' className="nothing">
                        <button className='buttonItem'>
                            <img className='items' src={cartImage} alt="cartImage" />
                        </button>
                        <div className="absoluteCartQuantity">
                            {NumberQuantityItems()}
                        </div>
                    </Link>
                    <Outlet />
                </>
            )

        else
            return (
                <> <Link to='/login' className="nothing">
                    <button className='buttonItem'>
                        <img className='items' src={cartImage} alt="cartImage" />
                    </button>
                    <div className="absoluteCartQuantity">
                        {NumberQuantityItems()}
                    </div>
                </Link>
                    <Outlet />
                </>
            )

    }



    return (
        <>
            {showCart()}
        </>
    )
}
export default Cart;