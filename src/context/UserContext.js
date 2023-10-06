import React, { useState, createContext, useContext } from "react";
import {getUserById} from "../api/apiFunctions";
import { useEffect } from "react";


const UserContext = createContext( );
const UserLogged = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useUserLogged() {
    return useContext(UserLogged);
}

export const UserProvider = (props) => {


    const [User, setUser] = useState(null);
    useEffect(() => {

        const id = 3;
        getUserById(id).then((data) => {
            setUser(
                data
                );
        });
    }, []);

    const changueLogin = () => {
        if (User) {
            setUser(null);
        }
        else {
            setUser(User);
        }
    }

    return <UserContext.Provider value={User}>
        <UserLogged.Provider value={changueLogin}>
            {props.children}
        </UserLogged.Provider>
    </UserContext.Provider>
}
