import { addUser, findUserEmail } from "../repositories/userRepository";
import type { User } from "../types/auth";




export const SignupUser = async (newUser:User)=>{
    
    findUserEmail(newUser.email)
    await addUser(newUser)
    

}