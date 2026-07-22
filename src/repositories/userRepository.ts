import { db } from "../firebase/config";
import { collection ,addDoc} from "firebase/firestore";
import type { User } from "../types/auth";


const userCollection = collection(db,"users")




export const addUser = async (newUser:User)=>{
    await addDoc(userCollection,newUser)
    console.log("User Added")
}
