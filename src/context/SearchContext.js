import React , { createContext, useState }from "react";

const SearchContext = createContext();

const SearchProvider = ({children}) => {
    const [searchProducts, setSearchProducts] = useState([]);

    return <SearchContext.Provider value={{searchProducts, setSearchProducts}}>{children}</SearchContext.Provider>
}

export {SearchProvider, SearchContext};