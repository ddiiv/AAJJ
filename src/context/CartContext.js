import React, { useState, useContext, createContext, useEffect } from "react";
import { useUserContext } from "./UserContext";
import { getCartByIdUser } from "../api/apiFunctions";

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}


export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const UserContext = useUserContext();

    const getCartItemsByIdUser = async () => {
        if (UserContext) {

            await getCartByIdUser(UserContext.IdUser).then((data) => {
                if (data) {
                    let c = 0;
                   function QuantityCartFix () {
                    data.map( a => {
                        let i = 0
                        if(a.QuantityCart > a.QuantityStock)
                        {
                            i = a.QuantityStock
                            c = i;
                            a.QuantityCart = i;
                            return a
                        }
                        else{
                            c = c + a.QuantityCart;
                            return a
                        }
                       
                    })
                    return data;
                    }
                    setCart(QuantityCartFix())
                    return cart
                

                 
                }
            });
        }
        else {
            setCart(null)
            console.log("CART CONTEXT : no hay usuario logeado");
            return cart
        }
    }

    useEffect(() => {


        getCartItemsByIdUser()
        
 
    })


    /*
        const removeFromCart = (product) => {
            const existingCartItem = cartItems.find(
                (cartItem) => cartItem.IdStock === product.IdStock
            );
    
            if (existingCartItem.Quantity === 1) {
                return cartItems.filter(
                    (cartItem) => cartItem.IdStock !== product.IdStock
                );
            }
    
            return cartItems.map((cartItem) =>
                cartItem.IdStock === product.IdStock
                    ? { ...cartItem, Quantity: cartItem.Quantity - 1 }
                    : cartItem 
            );
        };
        */


    // const clearCart = () => {
    //     setCart([]);
    // };



    return (
        <CartContext.Provider
            value={cart}
        >
            {children}
        </CartContext.Provider>
    );
};