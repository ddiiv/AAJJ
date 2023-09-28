
import CatalogS from "./CatalogStock";
import './stock.css';
function StockMainComponent() {
    return (

    <div className="container">
        <div className="table">
            <h2 className="title"> {"Manejo de Stock"}</h2>
    
            <div className="">
            <CatalogS/>
            </div>
        </div>

    </div>

);
}
export default StockMainComponent;