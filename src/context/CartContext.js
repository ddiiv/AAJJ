import React, { useState, useContext, createContext, useEffect } from "react";
import { useUserContext } from "./UserContext";
import { getCartByIdUser, putCartItemQuantity, deleteCartItem } from "../api/apiFunctions";


const CartContext = createContext();
const CartFunctionsContext = createContext();

export function useCartContext() {
    return useContext(CartContext);
}
export function useCartFunctions() {
    return useContext(CartFunctionsContext);
}

export const CartProvider = ({ children }) => {
    const initialValues = {
        Enabled: false,
        IdCartItem: 0,
        IdStock: 0,
        Image: "",
        Price: 0,
        QuantityCart: 0,
        QuantityStock: 0,
        Size: "",
        Title: "",
        QC: true
    }
    const UserContext = useUserContext();
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState(initialValues);
    const [QuantityCart, setQuantityCart] = useState(0)
    const sesionCountry = localStorage.getItem("geoLocation-country")
    const actualUsd = sessionStorage.getItem("USD-BLUE")

    function sumQuantityCart(updateCart) {

        if (updateCart === null || updateCart === undefined) {
            let sum = 0;
            let i = 0;
            for (i = 0; i < cart?.length; i++) {
                sum = sum + cart[i]?.QuantityCart
            }

            setQuantityCart(sum)
        }
        else {

            let sum = 0;
            let i = 0;
            for (i = 0; i < updateCart?.length; i++) {
                sum = sum + updateCart[i]?.QuantityCart
            }
            setQuantityCart(sum)
        }
        setLoading(false)
    }
    function sumTotalPriceCart() {
        let sum = 0;
        let cont = cart?.length
        let i;
        for (i = 0; i < cont; i++) {
            if (sesionCountry === "US") {
                sum = parseFloat((sum + (cart[i].QuantityCart * cart[i].Price)).toFixed(3))
            }
            else {
                sum = sum + cart[i].QuantityCart * cart[i].Price
            }
        }
        return sum
    }
    async function getCartItemsByIdUser() {
        const token = window.localStorage.getItem("token")
        if (UserContext !== null && token !== null) {
            await getCartByIdUser(UserContext.IdUser).then((data) => {

                if (cart.IdCartItem === 0 && !data.error) {
                    if (sesionCountry === "US") {


                        data?.map(a => {
                            let i = 0;
                            a.Price = parseFloat((a.Price / actualUsd).toFixed(3))
                            if (a.QuantityCart > a.QuantityStock) {
                                i = a.QuantityStock
                                a.QuantityCart = i;
                                return a;
                            }
                            else {
                                return a;
                            }
                        }
                        )
                    }
                    else{
                        data?.map(a => {
                            let i = 0;
                            if (a.QuantityCart > a.QuantityStock) {
                                i = a.QuantityStock
                                a.QuantityCart = i;
                                return a;
                            }
                            else {
                                return a;
                            }
                        }
                        )
                    }
                    setLoading(false)
                    sumQuantityCart(data);
                    setCart(data)
                }
            });
            return cart
        }
        else {
            setLoading(true)
        }
    }

    useEffect(() => {
        getCartItemsByIdUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [UserContext])

    const removeFromCart = async (idCartItem) => {
        if (idCartItem) {
            try {
                await deleteCartItem(idCartItem);
                const updatedCart = cart.filter(c => c.idCartItem !== idCartItem);
                setCart(updatedCart);
                window.location.reload()

            } catch (error) {

                console.error('Error al eliminar el elemento:', error);
            }
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const changueQuantityItemCart = async (idsToPutQuantity) => {
        if (idsToPutQuantity && cart) {
            await putCartItemQuantity(idsToPutQuantity).then((data) => {
                if (data) {

                    const idcart = idsToPutQuantity.idCartItem;
                    let i;
                    let updateCart = null;
                    for (i = 0; i < cart.length; i++) {

                        if (cart[i].IdCartItem === idcart) {
                            cart[i].QuantityCart = idsToPutQuantity.stockToHandle;
                            updateCart = cart;

                        }
                        else {
                            updateCart = cart;

                        }
                        setLoading(true)

                    }
                    setCart(updateCart);
                    sumQuantityCart(updateCart);

                    return updateCart
                }

            })
        }

    }

    return (
        <CartFunctionsContext.Provider
            value={{ changueQuantityItemCart, clearCart, QuantityCart, sumTotalPriceCart, removeFromCart, loading }}>
            <CartContext.Provider
                value={cart}>
                {children}
            </CartContext.Provider>
        </CartFunctionsContext.Provider>
    );
};