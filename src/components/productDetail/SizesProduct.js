import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFunctions";
import StockProductxSize from "./StockProductxSize";

const SizesProduct = ({ idProductS })   => {

    const idProductSelected = idProductS;

    const [sizesProduct, setSizesProduct] =  useState([]);
    const [stock, setStock] = useState(false);
    useEffect(()=>{
        getSizesByIdProduct(idProductSelected).then((data)=>{

            setSizesProduct(data);
        })

    }, [])
    const handleStock = () => {
            setStock(true)
    
    }

    return (
        <>
            
                {sizesProduct.map((size) =>{
                if(size.Quantity === 0){
                    return(
                        <div className="SizeItems">
                            <div className="sizeCircleNoStock">
                            <b className="itemSizeHidden" key={size.IdSize} for={size.Size}>{size.size}</b>
                            </div>
                        </div>
                    )
                }
                else{
                    
                return(
                    <div className="SizeItems">
                        <input type="radio" className="itemSize" value={size.size} specification={size.size} onClick={handleStock}></input><b className="sizeCircle" key={size.IdSize} for={size.Size}>{size.size}</b> 
                    </div>
                )}})}
                {stock ? <StockProductxSize Size={sizesProduct} /> : null}

            
        </>
    )
}
export default SizesProduct;