import { addUser } from "../firebase/auth";
import type { User } from "../types/auth";




export const SignupUser = async (newUser:User)=>{
    
    try {

        await addUser(newUser)
        return {did:true,message:"Registered Sucsessfully"}

    } catch (error) {
        if (error instanceof Error) {
            return {
                did: false,
                message: error.message
            }
        }
        return {
            did : false,
            message : "Somthing Happened"
        }
    }
    

}