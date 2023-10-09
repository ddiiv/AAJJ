import React, { useState } from 'react';
import userr from '../../img/user.png'
import { useUserContext } from "../../context/UserContext.js";
import { useUserLogged } from '../../context/UserContext.js';


const User = () => {
    const User = useUserContext();
    const Logged = useUserLogged();
    console.log(User)


    return (
        <>
        {Logged}
            
        
        
        </>
    );
}

export default User;