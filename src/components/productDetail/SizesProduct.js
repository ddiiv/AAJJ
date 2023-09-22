import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFunctions";

const SizesProduct = ({ idProductS })   => {

    const idProductSelected = idProductS;

    const [sizesProduct, setSizesProduct] =  useState([]);
    useEffect(()=>{
        getSizesByIdProduct(idProductSelected).then((data)=>{
        setSizesProduct(data)}
        )

    }, [])

    return (
        <>

                {sizesProduct.map((size) => (
                        <div className="sizeCircle">
                        
                        <h1 className="itemSize" key={size.IdSize} for={size.Size}>{size.size}</h1>
                        <b>Quedan: {size.Quantity}</b>
                        </div>
                ))}

        </>
    )
}
export default SizesProduct;