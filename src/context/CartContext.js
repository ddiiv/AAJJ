import React, { useState, useContext, createContext, useEffect } from "react";
import { useUserContext } from "./UserContext";
import { getCartByIdUser, putCartItemQuantity } from "../api/apiFunctions";


const CartContext = createContext();
const CartFunctionsContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}
export function useCartFunctions() {
    return useContext(CartFunctionsContext);
}

export const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const UserContext = useUserContext();


    useEffect(() => {

        async function getCartItemsByIdUser() {
            if (UserContext) {

                await getCartByIdUser(UserContext.IdUser).then((data) => {

                    if (cart === null) {
                        data.map(a => {
                            let i = 0
                            if (a.QuantityCart > a.QuantityStock) {
                                i = a.QuantityStock
                                a.QuantityCart = i;
                                return a
                            }
                            else {
                                return a
                            }
                        })
                        setCart(data)
                        return cart
                    }
                });
            }
            else {
                setCart(null)
            }
        }

        getCartItemsByIdUser();


    }, [UserContext, cart])


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
    const changueQuantityItemCart = async (idsToPutQuantity) => {
        if (idsToPutQuantity && cart) {
            
            await putCartItemQuantity(idsToPutQuantity).then(data => {

                if (data) {
                    return data

                }

            })
        }
    }


    //await 
    //then actualizar carrito
    //catch

    return (
        <CartFunctionsContext.Provider
            value={{changueQuantityItemCart, clearCart, }}
        >
            <CartContext.Provider
                value={cart}
            >
                {children}
            </CartContext.Provider>
        </CartFunctionsContext.Provider>
    );
};