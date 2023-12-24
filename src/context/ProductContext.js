import React, { createContext, useContext, useEffect, useState } from "react";
import { getProducts, getProductsByCategory, getProductsHighlist } from "../api/apiFunctions";

const ProductContext = createContext();
const ProductFunctions = createContext();

export const useProductContext = () => useContext(ProductContext);
export const useProductFunctions = () => useContext(ProductFunctions);

export const ProductProvider = ({ children }) => {
    const [product, setProducts] = useState(null);
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        getProducts()
            .then(Products => {
                setProducts(Products)
                return Products
            })
            .catch((error) => {
                alert(error)
            })
    }, [])
    const getProductByCategorySelected = async (categorySelected) => {

        try {
            const products = await getProductsByCategory(categorySelected)
            if (localStorage.getItem("geoLocation-country") === "AR") {
                setListProduct(products)
            }
            else {
                let newArray = products.map(product => {
                    let priceUsd = sessionStorage.getItem("USD-BLUE");
                    return {
                        ...product,
                        Price: new Intl.NumberFormat("US", { style: 'currency', currency: 'USD' }).format(product.Price / priceUsd)
                    }
                });
                setListProduct(newArray);
            }


        } catch (error) {
            throw new Error('Error al obtener los productos de la API. Error: ' + error)
        }
    }
    const getProductsHightlist = async () => {
        try {
            const products = await getProductsHighlist()
            if (localStorage.getItem("geoLocation-country") === "AR") {
                setListProduct(products)
            }
            else {
                let newArray = products.map(product => {
                    let priceUsd = sessionStorage.getItem("USD-BLUE");
                    return {
                        ...product,
                        Price: new Intl.NumberFormat("US", { style: 'currency', currency: 'USD' }).format(product.Price / priceUsd)
                    }
                });
                setListProduct(newArray);
            }

        }
        catch (error) {
            throw new Error('Error al obtener los productos de la API. Error: ' + error)
        }
    }

    return (
        <ProductContext.Provider value={product}>
            <ProductFunctions.Provider value={{ getProductByCategorySelected, getProductsHightlist, listProduct }}>
                {children}
            </ProductFunctions.Provider>
        </ProductContext.Provider>
    )
}