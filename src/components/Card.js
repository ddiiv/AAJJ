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
            <div className="max-w-6xl mx-auto" key={products.idProduct}>
                <Link className="nothing--profile" to={`/product/${products.Title}`}>
                    <div className="max-w-sm w-full sm:w-1/2 lg:w-1/3 py-6 px-3">

                        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                            <img src={products.Image} alt="Producto" className="productImage" />
                            <div className="p-4">
                                <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{products.SubCategory}</p>
                                <p className="text-gray-700 Title"> {products.Title}</p>
                                <p className="text-3xl text-gray-900">{localStorage.getItem("tradecoin")} {products.Price}</p>
                            </div>

                            <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100 Description">
                                <div className="text-xs uppercase font-bold text-gray-600 tracking-wide Description">Descripcion</div>
                                <div className="flex items-center pt-2 Description">
                                    <div className="description-text-card Description">
                                        <p className="text-sm text-gray-700 Description">{products.Description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Card;