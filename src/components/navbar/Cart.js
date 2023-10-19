import React from "react";
import cartImage from '../../img/carro.png'
import { useCartContext } from "../../context/CartContext";




const Cart = () => {
    const cart = useCartContext();
    console.log(cart)


    return (
        <>
            <button className='buttonItem'>
                <img className='items' src={cartImage} alt="" />
                {cart ? (
                    <b>{cart.cart}</b>) : null}
            </button>
        </>
    )
}
export default Cart;