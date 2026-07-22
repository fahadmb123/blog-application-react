import { addUser } from "../firebase/auth";
import type { User } from "../types/auth";




export const SignupUser = async (newUser:User)=>{
    const fetch = await addUser(newUser)
    return fetch
}