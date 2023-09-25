import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFunctions";
import StockProductxSize from "./StockProductxSize";

const SizesProduct = ({ idProductS })   => {

    const idProductSelected = idProductS;
    const [StockxSize, setStockxSize] = useState([]);
    const [frameWork, setFrameWork] = useState([]);
    const [sizesProduct, setSizesProduct] =  useState([]);
    const [showStock, setShowStock] = useState(false);
    useEffect(()=>{
        getSizesByIdProduct(idProductSelected).then((data)=>{

            setSizesProduct(data);
        })

    }, [])
    const handleStock = (e) => {
            const a = e.target.value;
            setFrameWork(e.target.value);
            setShowStock(true);
            setStockxSize(sizesProduct[a-1]);

    }

    return (
        <>
                <div className="SizeItems">
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
                        <input type="radio" className="itemSize" name="itemSize" value={size.IdSize} specification={size.size} onChange={handleStock} checked={frameWork === size.IdSize ? true : false}></input><b className="sizeCircle" key={size.IdSize} for={size.Size}>{size.size}</b> 
                    </div>
                )}})}
                 </div>   
                <div className="StockXProductSizxSize">
                    {showStock ? <StockProductxSize Size={StockxSize} /> : null}
                </div>   
            
        </>
    )
}
export default SizesProduct;