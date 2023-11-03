import React, { useState } from 'react';
import userr from '../../img/user.png'
import { useUserContext, useUserLogged } from "../../context/UserContext.js";
import { Link } from 'react-router-dom';


const User = () => {

    return (
        <>
            <button className='buttonItem' id="center">
                <Link to="/login" className="nothing"><img className='items' src={userr} alt="" /></Link>
            </button>
        </>
    );
}

export default User;