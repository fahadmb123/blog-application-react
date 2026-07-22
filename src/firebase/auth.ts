import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth"
import type { User } from "../types/auth"
import { auth } from "../firebase/config"





export const addUser = async (newUser:User)=>{
    return await createUserWithEmailAndPassword(auth,newUser.email,newUser.password)
    
}

export const loginUser = async (user:User)=>{
    return await signInWithEmailAndPassword(auth,user.email,user.password)
}

export const logOut = async ()=>{
    return await signOut(auth)
}