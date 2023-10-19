import React from 'react';
import userr from '../../img/user.png'
import { useUserContext } from "../../context/UserContext.js";
import { useUserLogged } from '../../context/UserContext.js';


const User = () => {
    
    const User = useUserContext();
    const setlogged = useUserLogged();
    console.log(User)


    return (
        <>

        <button className='buttonItem' id="center" value={User} onClick={setlogged.changueLogin}><img className='items' src={userr} alt="" />
            
            {setlogged.Logged ===true ? (
            
                    <b>{User.UserName}</b>
            
            ) : null}
            </button>
        
        
        </>
    );
}

export default User;