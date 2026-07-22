import { useEffect, useState } from "react";
import { userContext } from "../context/AuthContext";
import type {  UserProviderProps} from "../types/auth";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";



export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<User | undefined>(undefined);
  

  useEffect(()=>{
    const result = onAuthStateChanged(auth,(fireBaseUser)=>{
      if (fireBaseUser) {
        setUser(fireBaseUser)
      }else {
        setUser(undefined)
      }
      return result
    })
  },[])
  
  return (
    <userContext.Provider value={{user, setUser }}>
      {children}
    </userContext.Provider>
  );
}