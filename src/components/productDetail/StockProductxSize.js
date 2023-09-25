import React,{useState} from "react";

const StockProductxSize = ({ Size })   => {
    const [stock, setStock] = useState(1);
    const handleStock = (e) => {
        console.log(e.target.value)
        setStock(e.target.value);
    }
    const handleStockAdd = (e) => {
        console.log(e.target.value)
        if(stock < Size.Quantity)
        {
        setStock(stock + 1);
        }
        else{
            alert("No hay mas stock disponible")
        }
    }
    const handleStockSubs = (e) => {
        console.log(e.target.value)
        if(stock > 1)
        {
        setStock(stock - 1);
        }
        else{
            alert("No se puede seleccionar menos de 1")
        }
    }


        return (
            <>
                <div className="StockProductxSize">
                    <h3 className="StockProductxSizeTitle">Seleccionó el talle: {Size.size}</h3>
                    <div className="subs">
                        <button className="subsButton" onClick={handleStockSubs}>-</button>
                    </div>
                    <input type="number" value={stock}  min={1} max={Size.Quantity}  className="StockProductxSizeNumber" onChange={handleStock} disabled ></input>
                    <div className="adds">
                    <button className="subsButton" onClick={handleStockAdd}>+</button>
                    </div>
                </div>

    
            </>
        )
    }
    export default StockProductxSize;