import React from 'react';
import userr from '../../img/user.png'
import { Link } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext';

const User = () => {
    const context = useUserContext();
    function isLogged() {
        console.log(context)
        if (context !== null) {
            return (
                <button className='buttonItem' id="center">
                    <Link to={`/profile/${context?.User}`} className="nothing"><img className='items' src={userr} alt="" /> <span className='rich-text usertext'>{context?.User}</span></Link>
                </button>
            );
        }
        else {
            return (
                <button className='buttonItem' id="center">
                    <Link to="/login" className="nothing"><img className='items' src={userr} alt="" /> <span className='rich-text usertext'></span></Link>
                </button>
            );
        }

    }
    return (
        <>
            {isLogged()}
        </>
    );
}

export default User;