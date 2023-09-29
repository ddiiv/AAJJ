import React, { useState } from "react";
import { useEffect } from "react";
import AddToCardProduct from "./AddToCardProduct";

const StockProductxSize = ({Size}) => {

    const [stock, setStock] = useState(1);



    const handleStockAdd = (e) => {

        if (stock < Size[0].Quantity) {
            setStock(stock + 1);
        }

    }
    const handleStockSubs = (e) => {

        if (stock > 1) {
            setStock(stock - 1);
        }

    }

    useEffect(() => setStock(1),[Size])

    return (
        <>
            <div className="StockProductxSize">
                <h3 className="StockProductxSizeTitle">Seleccionó el talle: {Size[0].size}</h3>
                <div className="subs">
                    <b className="subsButton" onClick={handleStockSubs}>-</b>
                </div>
                <input id="stock" type="number" inputMode="numeric" value={stock} min={1} max={Size[0].Quantity} className="StockProductxSizeNumber" disabled ></input>
                <div className="adds">
                    <b className="subsButton" onClick={handleStockAdd}>+</b>
                </div>
            
            </div>
    <AddToCardProduct/>
        </>
    )
}
export default StockProductxSize;