import type { BlogType } from "../types/auth";
import { addDoc ,collection, getDocs,orderBy,query,where,limit,serverTimestamp} from "firebase/firestore";
import { db } from "../firebase/config";

const blogCollection = collection(db,"blogs")

export const addBlog = async (blog:BlogType,userId:string)=>{
    const data = {...blog,userId,createdAt:serverTimestamp()}
    return await addDoc(blogCollection,data)
}


export const getMyBlogs = async (userId:string)=>{
    const qr = query(blogCollection,orderBy("createdAt","desc"),where("userId","==",userId),limit(10))
    const fetch = await getDocs(qr)
    
    const data = fetch.docs.map((doc)=>{
        return {
            id:doc.id,...doc.data()
        }
    }) as BlogType[]
    const lastDoc = data[data.length-1]
    return {data,lastDoc}
}