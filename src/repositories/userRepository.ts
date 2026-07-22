import { db } from "../firebase/config";
import { collection ,addDoc , query,where, getDocs} from "firebase/firestore";
import type { User } from "../types/auth";


const userCollection = collection(db,"users")




export const addUser = async (newUser:User)=>{
    await addDoc(userCollection,newUser)
}

export const findUserEmail = async (email:string)=>{
    const qr = query(userCollection,where("email","==",email))
    const details = await getDocs(qr);
    return details.empty? false : true
}
