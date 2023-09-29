import React,{useContext,useState, useEffect} from "react";
import { useUserContext } from "../../context/UserContext";
import { getCartByIdUser } from "../../api/apiFunctions";


const Cart = ()=>{
    const User = useUserContext();
    const [cart, setCart]= useState([]);
    useEffect(() =>{
        if(User)
        {
            const id = User.IdUser
            getCartByIdUser(id).then((data)=>
            {
                console.log(data)
                setCart(data)
            }
            )
        }
        else{
            setCart(null)
        }

    }, [])



    return(
        <>
        asd
        hacer .map de cart
        </>
    )
    }
    export default Cart;