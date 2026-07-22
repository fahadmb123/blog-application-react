import type { BlogType } from "../types/auth";
import { addDoc ,collection} from "firebase/firestore";
import { db } from "../firebase/config";

const blogCollection = collection(db,"blogs")

export const addBlog = async (blog:BlogType,userId:string)=>{
    const data = {...blog,userId}
    return await addDoc(blogCollection,data)
}

