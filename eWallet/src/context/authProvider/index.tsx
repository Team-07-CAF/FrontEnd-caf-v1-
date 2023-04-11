import React, { createContext, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./type";

export const AuthContext = createContext<IContext>({} as IContext)

export const AutheProvider = ({ children}: IAuthProvider) => {
   const [user, setUser] = useState<IUser | null>()

   async function authenticate (email: string, password: string) {

   }

   function logout () {

   }

   return (
    <AuthContext.Provider value={{...user, authenticate, logout }}>
        {children}
    </AuthContext.Provider>
   )
}