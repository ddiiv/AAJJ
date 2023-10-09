import React, { useState, createContext, useContext } from "react";
import {getUserById} from "../api/apiFunctions";
import { useEffect } from "react";
import userr from '../img/user.png'

const UserContext = createContext( );
const UserLogged = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useUserLogged() {
    return useContext(UserLogged);
}

export const UserProvider = ({children}) => {


    const [User, setUser] = useState(null);
  

    const changueLogin = () => {

        const handleLogin = (e) => {
            if (User != null) {
                setUser(null);
            }
            else {
                setUser(User);
            }
        }
        
        return(
            <button className='buttonItem' id="center" value={User} onClick={handleLogin}><img className='items' src={userr} alt="" />
            
            {User!= null ? (
            
                    <b>{User.User}</b>
            
            ) : null}
            </button>
        )
    }

  useEffect(() => {

        const id = 5;
        getUserById(id).then((data) => {
            setUser(
                data
                );
        });
    }, [User != null]);
    return <UserContext.Provider value={User}>
        <UserLogged.Provider value={changueLogin}>
            {children}
        </UserLogged.Provider>
    </UserContext.Provider>
}
