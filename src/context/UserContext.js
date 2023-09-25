import React,{useState,createContext, useEffect} from "react";
import user from './user';

const UserContext = createContext();    

const UserProvider = ({children}) => {
    

    const [User, setUser] = useState({});
    const a = user[0]
    useEffect(() => {
       setUser(a)
    }, []);

    return <UserContext.Provider value={{User}}>{children}</UserContext.Provider>
}
export {UserProvider, UserContext};