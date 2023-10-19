import React from "react";
import cartImage from '../../img/carro.png'
import { useCartContext } from "../../context/CartContext";





const Cart = () => {
    const cart = useCartContext();

    let c = 0 ;
    function NumberQuantityItems (){
        if(cart)
        {


            if(cart.QuantityCart > cart.QuantityStock)
            {
                cart.QuantityCart = cart.QuantityStock
            }
            else
            {
                cart.forEach(function(a){
                    c = c + a.QuantityCart;
                    console.log(a)
                },[c]);
                
                
                return (
                    <b className="cartItemsQuantity">{c}</b>
                )
            }
        }
    }


    return (
        <>
            <button className='buttonItem'>
                <img className='items' src={cartImage} alt="" />
                {NumberQuantityItems() }
            </button>
        </>
    )
}
export default Cart;