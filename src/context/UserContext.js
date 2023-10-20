import React, { useState, createContext, useContext } from "react";
import { getUserById } from "../api/apiFunctions";


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
    const [User, setUser] = useState();

    const getUser = async () => {
        const id = 5;
        await getUserById(id).then((data) => {

            if (data) {

                setUser({ ...data, Token: data.IdUser })
                return User;

            }
            else {
                alert("no llego el user");
            }
        });

    }

    const LogOut = () => {
        setUser(null)
        setLogged(false)
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

    return <UserLogged.Provider value={{ Logged, changueLogin }}>

        <UserContext.Provider value={User}>
            {children}

        </UserContext.Provider>
    </UserLogged.Provider>
}
