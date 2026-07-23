import type { BlogType } from "../types/auth";
import { addDoc ,collection, getDocs,orderBy,query,where,limit} from "firebase/firestore";
import { db } from "../firebase/config";

const blogCollection = collection(db,"blogs")

export const addBlog = async (blog:BlogType,userId:string)=>{
    const data = {...blog,userId}
    return await addDoc(blogCollection,data)
}


export const getMyBlogs = async (userId:string)=>{
    const qr = query(blogCollection,orderBy("createdAt","desc"),limit(10),where("userId","==",userId))
    const fetch = await getDocs(qr)
    console.log(fetch)
}