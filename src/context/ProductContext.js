import React, { createContext, useContext, useEffect, useState } from "react";
import { getProducts, getProductsByCategory, getProductsBySubCategory, getProductsHighlist } from "../api/apiFunctions";
import { useFiltersContext } from "./FiltersContext";

const ProductContext = createContext();
const ProductFunctions = createContext();

export const useProductContext = () => useContext(ProductContext);
export const useProductFunctions = () => useContext(ProductFunctions);

export const ProductProvider = ({ children }) => {

    const filters = useFiltersContext();
    const [product, setProducts] = useState(null);
    const [listProduct, setListProduct] = useState([])
    const [filteredProducts, setFilteredProducts] = useState(null)
    useEffect(() => {
        getProducts()
            .then(Products => {
                setProducts(Products)
                setFilteredProducts(Products)
                return Products
            })

    }, [])

    function filterProductsBySelected() {
        let products = product
        if (filters.selectedCategory.length > 0) {
            products = products.filter(product => filters.selectedCategory.includes(product.Category))
        }
        if (filters.selectedSubCategory.length > 0) {
            products = products.filter(product => filters.selectedSubCategory.includes(product.SubCategory))
        }
        if (filters.selectedSize.length > 0) {
            products = products.filter(product => filters.selectedSize.includes(product.Size))
        }
        if (filters.selectedRangePrice.length > 0) {

            products = products.filter(product => {
                return filters.selectedRangePrice.some(rangePrice => {
                    return product.Price >= rangePrice.min && product.Price <= rangePrice.max;
                });
            });
        }
        if (filters.selectedColor.length > 0) {
            products = products.filter(product => filters.selectedColor.includes(product.Color))
        }
        setFilteredProducts(products)
        return products
    }

    const getProductBySubCategorySelected = async (SubCategorySelected) => {
        try {
            const products = await getProductsBySubCategory(SubCategorySelected)
            if (localStorage.getItem("geoLocation-country") === "AR") {
                setFilteredProducts(products)
            }
            else {
                let newArray = products.map(product => {
                    let priceUsd = sessionStorage.getItem("USD-BLUE");
                    return {
                        ...product,
                        Price: new Intl.NumberFormat("US", { style: 'currency', currency: 'USD' }).format(product.Price / priceUsd)
                    }
                });
                setFilteredProducts(newArray);
            }
        } catch (error) {
            throw new Error('Error al obtener los productos de la API. Error: ' + error)
        }
    }

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
            <ProductFunctions.Provider value={{ getProductBySubCategorySelected, getProductByCategorySelected, getProductsHightlist, listProduct, filterProductsBySelected, filteredProducts }}>
                {children}
            </ProductFunctions.Provider>
        </ProductContext.Provider>
    )
}