import React, { useState, useContext, createContext, useEffect } from "react";
import { useUserLogged, useUserContext } from "./UserContext";
import { getCartByIdUser } from "../api/apiFunctions";

const CartContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}

let IdCartItem;
let IdStock;
let QquantityCart;
let CartTitle;
let CartImage;
let Price;
let QuantityStock;
let Size;
let Enabled;
export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const Logged = useUserLogged();
    const UserContext = useUserContext();

    const getCartItemsByIdUser = async () => {
        if (Logged.Logged === true) {

            await getCartByIdUser(UserContext.IdUser).then((data) => {

                if (data ) {
                    setCart(
                        data
                    );

                    IdCartItem = data.IdCartItem;
                    IdStock = data.IdStock;
                    QquantityCart = data.QquantityCart;
                    CartTitle = data.CartTitle;
                    CartImage = data.CartImage;
                    Price = data.Price;
                    QuantityStock = data.QuantityStock;
                    Size = data.Size;
                    Enabled = data.Enabled;

                }
                console.log("CartProvider", data);
            });

        }
        else {
            alert("CART CONTEXT : no hay usuario logeado");
        }
    }
    console.log(cart)
    useEffect(() => {
        getCartItemsByIdUser()
    }, [])







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


    const clearCart = () => {
        setCart([]);
    };



    return (
        <CartContext.Provider
            value={{
                cart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};