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
let Token;

export const UserProvider = ({ children }) => {



    const [Logged, setLogged] = useState(false);



    const getUser = async () => {
        const id = 5;
        await getUserById(id).then((data) => {



            if (data) {

                IdUser = data.IdUser;
                UserName = data.User;
                Password = data.Password;
                Email = data.Email;
                DNI = data.Dni;
                DateCreation = data.DateCreation;
                DateOfBirth = data.DateOfBirth;
                MembershipNumber = data.MembershipNumber;
                PhoneNumber = data.PhoneNumber;
                Token = data.IdUser;

            }
            else {
                alert("no llego el user");
            }
        });

    }

    useEffect(() => {
        getUser()
    }, []);


    const changueLogin = () => {
        if (Logged === false) {
            setLogged(true);

        }
        else {
            setLogged(false);
        }
    }




    return <UserLogged.Provider value={{ Logged, changueLogin }}>

        <UserContext.Provider value={{
            IdUser,
            UserName,
            Password,
            Email,
            DNI,
            DateCreation,
            DateOfBirth,
            MembershipNumber,
            PhoneNumber,
            Token
        }}>
            {children}

        </UserContext.Provider>
    </UserLogged.Provider>
}
