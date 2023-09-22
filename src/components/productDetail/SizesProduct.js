import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFuntions";

const SizesProduct = ({ idProductS })   => {

     const idProductSelected = idProductS;    
     const [sizesProduct, setSizesProduct] =  useState([]);
   

    return (
        <>
            <h3>Talle</h3>
                {sizesProduct.map((size) => (
                    <div className="ProductSizeItem" >
                        <h1 key={size.IdSize} for={size.Size}>{size.Size}</h1>
                    </div>
                ))}

        </>
    )
}
export default SizesProduct;