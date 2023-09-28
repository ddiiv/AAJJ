import React, { useState } from 'react';
import userr from '../../img/user.png'

import { useUserContext } from "../../context/UserContext.js";



const User = () => {
    const User = useUserContext();
    const [isLogged, setIsLogged] =  useState(false)
    const handleLogged= () =>{
        if(isLogged===true)
        {
            setIsLogged(false)
        }
        else{
            setIsLogged(true)
        }
    }


    return (
        <>
    
            <button className='buttonItem' id="center" onClick={handleLogged}><img className='items' src={userr} alt="" />
            
            {isLogged===true ? (
            
                    <b>{User.User}</b>
            
            ) : null}
            </button>
        
        
        </>
    );
}

export default User;