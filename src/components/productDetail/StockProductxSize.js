import React, { useState } from "react";
import { useEffect } from "react";
import AddToCardProduct from "./AddToCardProduct";

const StockProductxSize = ({ Size }) => {
    // necesito que al cambiar el size se resetee el stock

    const [stock, setStock] = useState(1);



    const handleStockAdd = (e) => {
        console.log(e.target.value)
        if (stock < Size.Quantity) {
            setStock(stock + 1);
        }

    }
    const handleStockSubs = (e) => {
        console.log(e.target.value)
        if (stock > 1) {
            setStock(stock - 1);
        }

    }

    useEffect(() => setStock(1),[Size])

    return (
        <>
            <div className="StockProductxSize">
                <h3 className="StockProductxSizeTitle">Seleccionó el talle: {Size.size}</h3>
                <div className="subs">
                    <b className="subsButton" onClick={handleStockSubs}>-</b>
                </div>
                <input id="stock" type="number" inputMode="numeric" value={stock} min={1} max={Size.Quantity} className="StockProductxSizeNumber" disabled ></input>
                <div className="adds">
                    <b className="subsButton" onClick={handleStockAdd}>+</b>
                </div>
            
            </div>
    <AddToCardProduct/>
        </>
    )
}
export default StockProductxSize;