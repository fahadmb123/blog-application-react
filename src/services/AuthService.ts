import { addUser , loginUser, logOut } from "../firebase/auth";
import type { User } from "../types/auth";
import { FirebaseError } from "firebase/app";




export const SignupUser = async (newUser:User)=>{
    try {
        const fetch = await addUser(newUser)
        await logOut()
        return {
            did : true,
            message : "Registered Sucsessfully",
            user:fetch.user
        }
    } catch (err) {
        if (err instanceof FirebaseError){
            const message = err.code.replace("auth/","").replaceAll("-"," ")
            return {
                did : false,
                message
            }
        }
        return {
            did : false,
            message: "Somthing Happened"
        }
    }
    
}

export const LoginUser = async (data:User)=>{
    try {
        const fetch = await loginUser(data)
        return {
            did : true,
            user:fetch.user
        }
    } catch (err) {
        if (err instanceof FirebaseError){
            const message = err.code.replace("auth/","").replaceAll("-"," ")
            return {
                did : false,
                message
            }
        }
        return {
            did : false,
            message: "Somthing Happened"
        }
    }
}

export const LogOut = async ()=>{
    try {
        await logOut()
        return {
            did : true,
            message : "Logged Out"
        }
    } catch (err) {
        if (err instanceof FirebaseError){
            return {
                did : false,
                message : err.message
            }
        }
        return {
            did : false,
            message: "Somthing Happened"
        }
    }
}