import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFuntions";

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
            <h3 className="sizeTitle">Talles disponibles</h3>
                {sizesProduct.map((size) => (
                    <div className="ProductSizeItem" >
                        <h1 key={size.IdSize} for={size.Size}>{size.size}</h1>
                        <b>Quedan: {size.Quantity}</b>
                    </div>
                ))}

        </>
    )
}
export default SizesProduct;