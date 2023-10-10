import React, { useState, createContext, useContext } from "react";
import { getUserById } from "../api/apiFunctions";
import { useEffect } from "react";

const UserContext = createContext();
const UserLogged = createContext();

export function useUserContext() {
    return useContext(UserContext);
}

export function useUserLogged() {
    return useContext(UserLogged);
}

    let IdUser;
    let UserName;
    let Password;
    let Email;
    let DNI;
    let DateCreation;
    let DateOfBirth;
    let MembershipNumber;
    let PhoneNumber;
export const UserProvider = ({ children }) => {


    const [User, setUser] = useState(null);
    const [Logged, setLogged] = useState(false)



    const getUser = async () => {
        const id = 5;
        await getUserById(id).then((data) => {
            
            setUser(data);

            if (User != null) {
                IdUser = User.IdUser;
                UserName = User.User;
                Password = User.Password;
                Email = User.Email;
                DNI = User.Dni;
                DateCreation = User.DateCreation;
                DateOfBirth = User.DateOfBirth;
                MembershipNumber = User.MembershipNumber;
                PhoneNumber = User.PhoneNumber;
            }
            else{
                alert("no llego el user");
            }
        });

    }

    useEffect(() => {
        getUser()
    }, []);


    const changueLogin = () => {
        if (User) {
            setLogged(true);
        }
        else {
            setLogged(false);
        }
    }

    console.log(User)


    return <UserContext.Provider value={{
        IdUser,
        UserName,
        Password,
        Email,
        DNI,
        DateCreation,
        DateOfBirth,
        MembershipNumber,
        PhoneNumber
    }}>
        <UserLogged.Provider value={{ Logged, changueLogin }}>
            {children}
        </UserLogged.Provider>
    </UserContext.Provider>
}
