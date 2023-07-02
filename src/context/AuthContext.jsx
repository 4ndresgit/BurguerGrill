

import { createContext, useState } from "react";

export const AuthContext = createContext({})

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState({
        logged: false,
        email: null
    });


    const login = (values) => {
        setUser({
            logged: true,
            email: values.email
        });
    };

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
}
