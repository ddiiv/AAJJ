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
                throw new Error('Error al obtener los productos de la API. Error: ' + error)
            }
        }
        getImageProduct()
    }, [2])
    return (
        <>

            <div class="max-w-6xl mx-auto" key={products.idProduct}>
   
                    <div class="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">
                        
                        <div class="bg-white shadow-xl rounded-lg overflow-hidden">
                        <img src={products.Image} alt="Producto" className="productImage"/>
                            <div class="p-4">
                                <p class="uppercase tracking-wide text-sm font-bold text-gray-700">{products.SubCategory}</p>
                                <p class="text-gray-700"> {products.Title}</p>
                                <p class="text-3xl text-gray-900">${products.Price}</p>
                            </div>

                            <div class="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
                                <div class="text-xs uppercase font-bold text-gray-600 tracking-wide">Descripcion</div>
                                <div class="flex items-center pt-2">
                                    <div className="description-text-card">
                                        <p class="text-sm text-gray-700 Description">{products.Description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
export default Card;