import React from "react";
import cartImage from '../../img/carro.png'
import { useCartContext } from "../../context/CartContext";
import { Link, Outlet } from "react-router-dom";
import { useUserLogged } from "../../context/UserContext";



const Cart = () => {
    const cart = useCartContext();
    const usercontext = useUserLogged();
    
    let c = 0;
    function NumberQuantityItems() {
        if (cart) {

            cart.forEach(function (a) {
                let i = 0;
                if (a.QuantityCart > a.QuantityStock) {
                    i = a.QuantityStock
                    c = i;
                }
                else {
                    c = c + a.QuantityCart;
                }

            }, [c]);


            return (
                <b className="cartItemsQuantity">{c}</b>
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