import React from 'react';
import userr from '../../img/user.png'
import { useUserContext, useUserLogged } from "../../context/UserContext.js";
import { useNavigate } from 'react-router-dom';


const User = () => {

    const User = useUserContext();
    const setlogged = useUserLogged();
    const navigate = useNavigate();

    const handleReDirectToLogin = () => {
        return navigate = "/login"
    }

    function setLogin() {
        if (setlogged.Logged === true) {
            <button className='buttonItem' id="center" value={User} onClick={setlogged.changueLogin}><img className='items' src={userr} alt="" />

                {User ? (

                    <b>{User.User}</b>

                ) : null}
            </button>
        }
        else {
            <button className='buttonItem' id="center" value={null} onClick={handleReDirectToLogin}><img className='items' src={userr} alt="" />

            </button>
        }
    }

    return (
        <>

            <button className='buttonItem' id="center" value={User} onClick={setlogged.changueLogin}><img className='items' src={userr} alt="" />

                {User ? (

                    <b>{User.User}</b>

                ) : null}
            </button>


        </>
    );
}

export default User;