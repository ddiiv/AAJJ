import React from "react";
import cartImage from '../../img/carro.png'
import { useCartContext } from "../../context/CartContext";
import { Link, Outlet } from "react-router-dom";
import { useUserLogged } from "../../context/UserContext";



const Cart = () => {
    const cart = useCartContext();
    const usercontext = useUserLogged();

    function NumberQuantityItems() {
        if (cart) {
            return (
                <b className="cartItemsQuantity">{cart.QuantityCart}</b>
            )

        }
    }
    function showCart() {

        if (cart && usercontext.Logged === true)
            return (
                <><Link to='/cartdetail' className="nothing">
                    <button className='buttonItem'>
                        
                        <img className='items' src={cartImage} alt="" />
                        {NumberQuantityItems()}
                    </button>
                    </Link>
                    <Outlet />
                </>
            )

        else
            return (
                <>
                    <button className='buttonItem' >
                        <img className='items' src={cartImage} alt="cartImage" />
                    </button>
                    
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