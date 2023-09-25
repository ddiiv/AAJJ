import React,{useContext,useState, useEffect} from 'react';
import userr from '../../img/user.png'

import { UserContext } from "../../context/UserContext.js";



const User = ({children}) => {
    const [isLogged, setIsLogged] = useState(false);
    const {User} = useContext(UserContext);
    const [userLogged, setUserLogged] = useState({});


    const handleModalLogin = () => {
        setIsLogged(true);    
        setUserLogged(User);
    }

    return (
        <>
            <button className='buttonItem' id="center" onClick={handleModalLogin}/><img className='items' src={userr} alt="" />
            {isLogged===true ? (
                    <div className="UserName">
                    <b> {userLogged} </b>
                    </div>
            ) : null}

           
        </>
    );
}

export default User;