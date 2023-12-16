import React, { useState, createContext, useContext } from "react";
import { useEffect } from "react";
import { getUserByCredentials, getUserById } from "../api/apiFunctions";


const UserContext = createContext();
const UserLogged = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useUserLogged() {
    return useContext(UserLogged);
}

export const UserProvider = ({ children }) => {

    const [Logged, setLogged] = useState(false);
    const [User, setUser] = useState(null);

    const getUser = async (credentials) => { 
        let ValueToReturn = null; 
        await getUserByCredentials(credentials).then((data) => {
            if (data !== false) {
                setUser(data.data)
                window.localStorage.setItem("token", String.valueOf.apply(data.token))
                window.localStorage.setItem("idU", data.data.IdUser)
                setLogged(true)
                ValueToReturn = data.data;
                return ValueToReturn;
            }
            else {
                setLogged(false)
                setUser(null)
                ValueToReturn = false;
                return ValueToReturn;
            }
        });
        return ValueToReturn;
    }
    const LogOut = () => {
        setUser(null)
        setLogged(false)
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("idU")
    }


    const changueLogin = () => {
        if (Logged === false) {
            getUser();
            setLogged(true);
        }
        else {
            LogOut()
        }
    }
    
    const authLogged = async () => {
        const token = window.localStorage.getItem("token");
        const idU = window.localStorage.getItem("idU")
        if (token !== null && User === null) {
            await getUserById(idU).then((data) => {
                console.log(data)
                if (data?.error === "Expired token") {
                    
                    setUser(null)
                    setLogged(false)
                    alert('Tu sesión ha expirado')
                    window.localStorage.clear("idU")
                    window.localStorage.clear("token")
                    return false
                }
                else {
                    setUser(data);
                    setLogged(true);
                    return true
                }
            })
        }
    }
    useEffect(() => {
        authLogged()
    })


    return (<UserLogged.Provider value={{ Logged, changueLogin, getUser, LogOut, authLogged }}>
        <UserContext.Provider value={User}>
            {children}
        </UserContext.Provider>
    </UserLogged.Provider>)
}
