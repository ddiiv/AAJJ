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
    
    const [cart, setCart] = useState({
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
    });
    const UserContext = useUserContext();
    const [loading, setLoading] = useState(false);

    function sumQuantityCart() {
        let sum = 0;
        let cont = cart?.length
        let i;
        for (i = 0; i < cont; i++) {
            sum = sum + cart[i].QuantityCart
        }
        if (sum === 0) {
            setLoading(true)
            return sum
        }
        else {
            setLoading(false)
            return sum
        }

    }
    function sumTotalPriceCart() {
        let sum = 0;
        let cont = cart?.length
        let i;
        for (i = 0; i < cont; i++) {
            sum = sum + cart[i].QuantityCart * cart[i].Price
        }
        return sum
    }

    useEffect(() => {
        async function getCartItemsByIdUser() {
            if (UserContext) {
                await getCartByIdUser(UserContext.IdUser).then((data) => {
                    if (cart.IdCartItem === 0) {
                        data.map(a => {
                            let i = 0;
                            if (a.QuantityCart > a.QuantityStock) {
                                i = a.QuantityStock
                                a.QuantityCart = i;
                                return a;
                            }
                            else {

                                return a;
                            }
                        })
                        setCart(data)

                        return cart
                    }
                });
            }
            else {
                setLoading(true)
            }
        }
        getCartItemsByIdUser();
    }, [UserContext, cart])

    const removeFromCart = async (idCartItem) => {
        if (idCartItem) {
            await deleteCartItem(idCartItem).then(data => {
                setCart({
                    Enabled: false,
                    IdCartItem: 0,
                    IdStock: 0,
                    Image: "",
                    Price: 0,
                    QuantityCart: 0,
                    QuantityStock: 0,
                    Size: "",
                    Title: ""
                });
                return data
            })
        }
    };

    const clearCart = () => {
        setCart([]);
    };

    const changueQuantityItemCart = async (idsToPutQuantity) => {
        if (idsToPutQuantity && cart) {
            await putCartItemQuantity(idsToPutQuantity).then(data => {
                if (data) {
                    setCart({
                        Enabled: false,
                        IdCartItem: 0,
                        IdStock: 0,
                        Image: "",
                        Price: 0,
                        QuantityCart: 0,
                        QuantityStock: 0,
                        Size: "",
                        Title: ""
                    });
                    return data
                }
            })
        }
    }

    return (
        <CartFunctionsContext.Provider
            value={{ changueQuantityItemCart, clearCart, sumQuantityCart, sumTotalPriceCart, removeFromCart, loading }}>
            <CartContext.Provider
                value={cart}>
                {children}
            </CartContext.Provider>
        </CartFunctionsContext.Provider>
    );
};