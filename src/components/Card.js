import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getImage } from "../api/apiFunctions";

const Card = ({ product }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getImageProduct = async () => {
            try {
                const staticProduct = product
                const res = await getImage(staticProduct.Image)
                const url = await res.url;
                setProducts({
                    ...staticProduct,
                    Image: url
                });

            } catch (error) {
                console.log('Error al obtener los productos de la API. Error: ' + error)
                return window.location.reload()
            }
        }
        getImageProduct()
    }, [2])


    
    return (
        <>
            <article className="max-w-6xl mx-auto" key={products.idProduct}>
                <Link className="nothing--profile" to={`/product/${products.Title}`}>
                    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">

                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={products.Image} alt="Producto" className="productImage" />
                            <div className="p-4">
                                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{products.SubCategory}</p>
                                <p className="text-gray-700 Title"> {products.Title}</p>
                                <p className="text-3xl text-gray-900">{localStorage.getItem("tradecoin")} {products.Price}</p>
                            </div>    
                        </div>
                    </div>
                </Link>
            </article>
        </>
    )
}
export default Card;