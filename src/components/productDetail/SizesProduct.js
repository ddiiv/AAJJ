import React, { useState, useEffect,createContext, useContext  } from "react";
import { getSizesByIdProduct } from "../../api/apiFunctions";
import StockProductxSize from "./StockProductxSize";

const StockxSizeSelected = createContext();

export function useStockxSizeSelected() {
    return useContext(StockxSizeSelected);
}

const SizesProduct = (idProductS) => {
    
    const idProductSelected = idProductS.idProductS;
    const [StockxSizeSelected, setStockxSizeSelected] = useState([]);
    const [frameWork, setFrameWork] = useState(0);
    const [sizesProduct, setSizesProduct] = useState([]);
    const [showStock, setShowStock] = useState(false);
    




    useEffect(() => {
        getSizesByIdProduct(idProductSelected).then((data) => {
            setSizesProduct(data);
        })

    }, [idProductSelected])

    const handleStock = (e) => {
        const a = e.target.value;
        const sizeSelected = sizesProduct.filter((size) => size.IdSize === parseInt(a)); 
        setFrameWork(a);
        setStockxSizeSelected(sizeSelected);
        setShowStock(true);

    }

    
    function showStockxSize() {
        
        if (showStock === true) {
            return (
                    <StockProductxSize Size={StockxSizeSelected}/>

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
                            <div className="SizeItems" key={size.IdSize} >
                                <div className="sizeCircleNoStock">
                                    <b className="itemSizeHidden">{size.size}</b>
                                </div>
                            </div>
                        )
                    }
                    else {

                        return (
                            <div className="SizeItems" key={size.IdSize}>
                                <input type="radio" className="itemSize" name="itemSize" value={size.IdSize} specification={size.size} onChange={handleStock} isChecked={frameWork === size.IdSize ? true: false}/>
                                <b className="sizeCircle">{size.size}</b>
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