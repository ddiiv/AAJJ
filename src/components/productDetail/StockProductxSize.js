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
                <div className="StockProductxSizeNumber">
                    <div className="subs">
                        <button className="subsButton" onClick={handleStockSubs}>-</button>
                    </div>
                    <input  className="subsButton" id="input" type="number" inputMode="numeric" value={stock} min={1} max={Size[0].Quantity} disabled ></input>
                    <div className="adds">
                        <button className="subsButton" onClick={handleStockAdd}>+</button>
                    </div> 
                </div>
            <AddToCardProduct size={Size} stockSelected={stock}/>
            </div>
        
        </>
    )
}
export default StockProductxSize;