import React, { useState, useEffect } from "react";
import { getSizesByIdProduct } from "../../api/apiFunctions";
import StockProductxSize from "./StockProductxSize";


const SizesProduct = ({idProductS}) => {

    const idProductSelected = idProductS;
    const [StockxSizeSelected, setStockxSizeSelected] = useState([]);
    const [frameWork, setFrameWork] = useState([]);
    const [sizesProduct, setSizesProduct] = useState([]);
    const [showStock, setShowStock] = useState(false);
    




    useEffect(() => {
        getSizesByIdProduct(idProductSelected).then((data) => {

            setSizesProduct(data);
        })

    }, [])

    const handleStock = (e) => {

        const a = e.target.value;
        setFrameWork(e.target.value);
        setStockxSizeSelected(sizesProduct[a - 1]);
        setShowStock(true);

    }


    function showStockxSize() {
        
        if (showStock === true) {

            return (
                <StockProductxSize Size={StockxSizeSelected} />
            )
        }
        else {
            return (
                <>
                </>
            )
        }
    }


    return (
        <>
            <div className="SizeItems">
             
                {sizesProduct.map((size) => {
                    if (size.Quantity === 0) {
                        return (
                            <div className="SizeItems">
                                <div className="sizeCircleNoStock">
                                    <b className="itemSizeHidden" key={size.IdSize} for={size.Size}>{size.size}</b>
                                </div>
                            </div>
                        )
                    }
                    else {

                        return (
                            <div className="SizeItems">
                                <input key={size.IdSize} type="radio" className="itemSize" name="itemSize" value={size.IdSize} specification={size.size} onChange={handleStock} checked={frameWork === size.IdSize ? true : false}/>
                                <b className="sizeCircle" for={size.Size}>{size.size}</b>
                            </div>
                        )
                    }
                })}
 
            </div>
        
            <div className="StockXProductSizxSize">
                {showStockxSize()}
            </div>

        </>
    )
}
export default SizesProduct;