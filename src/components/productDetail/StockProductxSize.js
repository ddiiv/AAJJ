import React, { useState } from "react";

const StockProductxSize = ({Size}) => {
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



    return (
        <>
            <div className="StockProductxSize">
                <h3 className="StockProductxSizeTitle">Seleccionó el talle: {Size.size}</h3>
                <div className="subs">
                    <b className="subsButton" onClick={handleStockSubs}>-</b>
                </div>
                <input type="number" inputMode="numeric" value={stock}  min={1} max={Size.Quantity} className="StockProductxSizeNumber" disabled ></input>
                <div className="adds">
                    <b className="subsButton" onClick={handleStockAdd}>+</b>
                </div>

            </div>

        </>
    )
}
export default StockProductxSize;