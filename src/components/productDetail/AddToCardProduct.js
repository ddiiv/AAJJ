import React from "react";

import { putCardItem } from "../../api/apiFunctions";
import { useUserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";


const AddToCardProduct = (size) => {

  
    const User = useUserContext();
    const s = size.size[0];
    const stock = size.stockSelected;
    const idstock = s.IdStock;
    let ids;
    const handleSubmit = async() => {
        if (User) {
           if(stock < s.Quantity){ 
                 
                   ids= {IdUser : User.IdUser, IdStock : idstock, StockSelected : stock}
                    await putCardItem(ids)
                return <Link to="" />
            
            }
                else{
                    window.location.reload()
                }

        }
        else {
            alert("logeate flaco");
        }
        


    }


    return (
        <>

            <button type="submit" className="addCartButton" onClick={handleSubmit}> Agregar al carrito</button>
        </>
    )
}

export default AddToCardProduct;
