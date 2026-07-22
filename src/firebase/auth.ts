import { createUserWithEmailAndPassword } from "firebase/auth"
import type { User } from "../types/auth"
import { db } from "../firebase/config"


export const addUser = async (newUser:User)=>{
    const returned = await createUserWithEmailAndPassword(db,newUser.email,newUser.password)
    console.log(returned)
}
