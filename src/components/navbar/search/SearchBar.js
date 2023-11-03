import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import search_png from "../../../img/search.png";
import { getProducts } from '../../../api/apiFunctions.js';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [allProducts, setAllProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const products = await getProducts();
            setAllProducts(products);
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (allProducts.length > 0) {
            const list = allProducts.filter((product) =>
                product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(list);
        }
    }, [searchTerm, allProducts]);

    return (
        <div className="navItem" id="searchBar">
            <input
                placeholder="Buscar"
                className="searchInput"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className='buttonItem'>
                <Link to={`/search`} className="searchBAR">
                    <img className="items" src={search_png} alt="" />
                </Link>
            </button>
            <div className="MainContainer">
            {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>Precio: {product.price}</p>
            {/* Agrega más detalles según tu estructura de datos */}
        </div>
    ))}
</div>

        </div>
    );
};

export default SearchBar;
