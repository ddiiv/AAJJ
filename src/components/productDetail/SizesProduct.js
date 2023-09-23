import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFunctions";

const SizesProduct = ({ idProductS })   => {

    const idProductSelected = idProductS;

    const [sizesProduct, setSizesProduct] =  useState([]);
    const [sizeWithStock, setSizeWithStock] = useState([]);
    useEffect(()=>{
        getSizesByIdProduct(idProductSelected).then((data)=>{

            if(data.Quantity > 0)
            {
            setSizesProduct(data)
            }
            else{
                setSizeWithStock(data)
            }

        })

    }, [])

    return (
        <>
            
                {sizeWithStock.map((size) => (
                    <div className="SizeItems">
                        <button className="sizeCircle">
                        <h1 className="itemSize" key={size.IdSize} for={size.Size}>{size.size}</h1>
                        </button>
                    </div>
                ))}
                {sizesProduct.map((size) => (
                    <div className="SizeItems">
                        <div className="sizeCircleNoStock">
                        <h1 className="itemSize" key={size.IdSize} for={size.Size}>{size.size}</h1>
                        </div>
                    </div>
                ))}

        </>
    )
}
export default SizesProduct;