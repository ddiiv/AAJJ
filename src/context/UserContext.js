import React, { useState, createContext, useContext } from "react";
import user from './user';

const UserContext = createContext();
const UserLogged = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useUserLogged() {
    return useContext(UserLogged);
}

export const UserProvider = ({ children }) => {


    const [User, setUser] = useState(null);
    const changueLogin = () => {
        if (User) {
            setUser(null);
        }
        else {
            setUser(user[0]);
        }
    }

    return <UserContext.Provider value={User}>
        <UserLogged.Provider value={changueLogin}>
            {children}
        </UserLogged.Provider>
    </UserContext.Provider>
}
