import React,{useState} from "react";

const StockProductxSize = ({ Size })   => {
    
        const [stock, setStock] = useState([]);

    
        return (
            <>
                <div className="StockProductxSize">
                    <h3 className="StockProductxSizeTitle">Selecciono el talle: {Size[0].size}</h3>
                    <input className="StockProductxSizeText"></input>
                </div>

    
            </>
        )
    }
    export default StockProductxSize;