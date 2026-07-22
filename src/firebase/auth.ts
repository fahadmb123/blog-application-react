import { createUserWithEmailAndPassword } from "firebase/auth"
import type { User } from "../types/auth"
import { auth } from "../firebase/config"
import { FirebaseError } from "firebase/app"




export const addUser = async (newUser:User)=>{
    try {
        const returned = await createUserWithEmailAndPassword(auth,newUser.email,newUser.password)
        
        return {
            did : true,
            message : "Registered Sucsessfully",
            user:returned.user
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