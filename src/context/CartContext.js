import React, { useState, useContext, createContext, useEffect } from "react";
import { useUserContext } from "./UserContext";
import { getCartByIdUser } from "../api/apiFunctions";

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const User = useUserContext();

    const  getCartItemsByIdUser= async ()   =>{
        if (User != null) {
            
            await getCartByIdUser(User.IdUser).then((data) => {
                 setCart(
                     data
                 );
             });
             console.log("CartProvider", cart);
         }
         else {
             console.log("no hay usuario logeado ");
         }
    }

    useEffect( () => async () =>{
        getCartItemsByIdUser()
    }, [10])






    /*
        const addToCart = (product) => {
            const existingCartItem = cartItems.find(
                (cartItem) => cartItem.IdStock === product.IdStock
            );
    
            if (existingCartItem) {
                return cartItems.map((cartItem) =>
                    cartItem.IdStock === product.IdStock
                        ? { ...cartItem, Quantity: cartItem.Quantity + 1 }
                        : cartItem
                );
            }
    
            return [...cartItems, { ...product, Quantity: 1 }];
        };
    
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


    const clearCart = () => {
        setCart([]);
    };

    const IdCartItem = cart.IdCartItem;
    const IdStock = cart.IdStock;
    const QquantityCart = cart.QquantityCart;
    const CartTitle = cart.Title;
    const CartImage = cart.Image;
    const Price = cart.Price;
    const QuantityStock = cart.QuantityStock;
    const Size = cart.Size;
    const Enabled = cart.Enabled;
    return (
        <CartContext.Provider
            value={{
                IdCartItem,
                IdStock,
                QquantityCart,
                CartTitle,
                CartImage,
                Price,
                QuantityStock,
                Size,
                Enabled,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};