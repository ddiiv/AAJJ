import React , { createContext, useState }from 'react';

const SearchContext = createContext();

const SearchProvider = ({props}) => {
    const [searchProducts, setSearchProducts] = useState([]);

    return <SearchContext.Provider value={{searchProducts, setSearchProducts}}>{props.children}</SearchContext.Provider>
}

export {SearchProvider, SearchContext};