import { addUser } from "../repositories/userRepository";
import type { User } from "../types/auth";




export const SignupUser = async (newUser:User)=>{
    
    
    await addUser(newUser)
    

}