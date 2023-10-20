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

                    setCart(data);
                    return cart;
                }

            });

        }
        else {
            setCart(null)
            console.log("CART CONTEXT : no hay usuario logeado");
        }
    }

    useEffect(() => {
        getCartItemsByIdUser()
    })




    const addToCart = (product) => {
        const existingCartItem = cart.find(
            (cartItem) => cartItem.IdStock === product.IdStock
        );

        if (existingCartItem) {
            return cart.map((cartItem) =>
                cartItem.IdStock === product.IdStock
                    ? { ...cartItem, Quantity: cartItem.Quantity + 1 }
                    : cartItem
            );
        }

        return [...cart, { ...product, Quantity: 1 }];
    };
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