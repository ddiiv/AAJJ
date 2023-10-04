import React from "react";
import { useState } from "react";
import { putCardItem } from "../../api/apiFunctions";
import { useUserContext } from "../../context/UserContext";


const AddToCardProduct = (size, stockSelected)=>{
    
const [IdsForPut, setIdsForPut] = useState(null);
const User = useUserContext();

    const handleSubmit=()=>
    {
        if(User != null)
        {
        setIdsForPut
        ({
            IdUser : User.IdUser,
            IdStock: size.IdStock,
            Quantity: stockSelected
        })
        
    }
    else{
        alert("logeate flaco");
    }



    }

    
return(
    <>
    
    <button type="submit" className="addCartButton" onClick={handleSubmit}> Agregar al carrito</button>
    </>
)
}

export default AddToCardProduct;
