import { useState } from "react";
import { useEffect } from "react";
import { createContext, useContext } from "react";
import { getProducts } from "../api/apiFunctions";

const SerachContext = createContext();
const SearchFunctions = createContext();
export const useSearchContext = () => {
    return useContext(SerachContext)
}
export const useSearchFunctions = () => {
    return useContext(SearchFunctions)
}
export const SearchProvider = ({ children }) => {

    const [allProducts, setAllProducts] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (allProducts === null) {
                const products = await getProducts();
                setAllProducts(products);
                setFilteredProducts(products);
            }
        };
        fetchData();
    }, [filteredProducts, allProducts])

    const handleChangeSearch = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSearchProductsByInput = () => {
        if (filteredProducts !== null && allProducts !== null) {
            const updateProducts = allProducts.filter((r) =>
                r.Title && typeof r.Title === 'string' && r.Title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredProducts(updateProducts);
        }
        
    }
    return (
        <SearchFunctions.Provider value={{ handleSearchProductsByInput, searchInput, handleChangeSearch }}>
            <SerachContext.Provider value={filteredProducts}>
                {children}
            </SerachContext.Provider>
        </SearchFunctions.Provider>)
}