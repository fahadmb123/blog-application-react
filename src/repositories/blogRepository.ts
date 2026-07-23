import type { BlogType } from "../types/auth";
import {deleteDoc, addDoc ,collection, getDocs,orderBy,query,where,limit,serverTimestamp, startAfter, doc, getDoc} from "firebase/firestore";
import { db } from "../firebase/config";
import type { QueryDocumentSnapshot } from "firebase/firestore";

const blogCollection = collection(db,"blogs")

export const addBlog = async (blog:BlogType,userId:string)=>{
    const data = {...blog,userId,createdAt:serverTimestamp()}
    return await addDoc(blogCollection,data)
}


export const getMyBlogs = async (userId:string,lastBlog?:QueryDocumentSnapshot)=>{
    let qr
    if (lastBlog) {
        qr = query(blogCollection,orderBy("createdAt","desc"),where("userId","==",userId),startAfter(lastBlog),limit(10))
    }else {
        qr = query(blogCollection,orderBy("createdAt","desc"),where("userId","==",userId),limit(10))
    }
    
    const fetch = await getDocs(qr)
    
    const data = fetch.docs.map((doc)=>{
        return {
            id:doc.id,...doc.data()
        }
    }) as BlogType[]
    const lastDoc = fetch.docs[fetch.docs.length - 1];
    return {data,lastDoc}
}

export const deleteBlog = async (blogId:string)=>{
    await deleteDoc(doc(blogCollection,blogId))
}


export const getBlog = async (id:string)=>{
    const fetch = await getDoc(doc(blogCollection,id))
    return fetch
}