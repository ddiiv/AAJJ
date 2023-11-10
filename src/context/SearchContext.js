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
    let [filteredProducts, setFilteredProducts] = useState(null);

    const fetchData = async () => {
        if (allProducts === null) {
            const products = await getProducts();
            setAllProducts(products);
            return allProducts
        }
    };

    useEffect(()=>{
        fetchData();
    },[allProducts, filteredProducts])

    const handleSearchProductsByInput = (e) =>{
            let searchInput = e.target.value;    
            const updateProducts = allProducts?.filter((r) =>
                r.Title && typeof r.Title === 'string' && r.Title.toLowerCase().includes(searchInput.toLowerCase())
            );
            setFilteredProducts(updateProducts);
    }
    function reset() {
        if (filteredProducts !== null) {

        }
    }



    return (
        <SearchFunctions.Provider value={{handleSearchProductsByInput, reset}}>
            <SerachContext.Provider value={filteredProducts}>
                {children}
            </SerachContext.Provider>
        </SearchFunctions.Provider>)
}