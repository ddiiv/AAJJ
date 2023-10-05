import React from "react";
import { useState } from "react";
import { putCardItem } from "../../api/apiFunctions";
import { useUserContext } from "../../context/UserContext";


const AddToCardProduct = (size)=>{

    const [IdsForPut, setIdsForPut] = useState();
    const User = useUserContext();
    const s = size.size[0];
    const stock= size.stockSelected;
    const idstock = s.IdStock;


    const handleSubmit=()=>
    {
        if(User != null)
        {
        setIdsForPut
        ({
            IdUser : User.IdUser,
            IdStock: idstock,
            Quantity: stock
        })
        
    }
    else{
        alert("logeate flaco");
    }
    console.log(IdsForPut)


    }

    
return(
    <>
    
    <button type="submit" className="addCartButton" onClick={handleSubmit}> Agregar al carrito</button>
    </>
)
}

export default AddToCardProduct;
