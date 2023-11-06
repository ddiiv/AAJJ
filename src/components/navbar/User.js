import React from 'react';
import userr from '../../img/user.png'
import { Link } from 'react-router-dom';


const User = () => {

    return (
        <>
            <button className='buttonItem' id="center">
                <Link to="/login" className="nothing"><img className='items' src={userr} alt="" /> <span className='rich-text usertext'></span></Link>
            </button>
        </>
    );
}

export default User;