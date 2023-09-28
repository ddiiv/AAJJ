import React from 'react';
import userr from '../../img/user.png'

import { useUserContext, useUserLogged } from "../../context/UserContext.js";



const User = () => {
    const User = useUserContext();
    const changueLogin = useUserLogged();
    const isLogged = User ? true : false;


    return (
        <>
            <button className='buttonItem' id="center" onClick={changueLogin}><img className='items' src={userr} alt="" />
             
             {isLogged===true ? (
                    <div className="UserName">
                    <b> {User.User} </b>
                    </div>
            ) : null}
            </button>
           
           
        </>
    );
}

export default User;