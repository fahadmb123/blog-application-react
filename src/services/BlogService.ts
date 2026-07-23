import { addBlog, deleteBlog, getMyBlogs } from "../repositories/blogRepository";
import type { BlogType } from "../types/auth";
import type { QueryDocumentSnapshot } from "firebase/firestore";


export const newBlog = async (blog:BlogType,userId:string)=>{
    await addBlog(blog,userId)
    return {message:"Blog added successfully"}
} 

export const loadMyBlogs = async (userId:string,lastBlog?:QueryDocumentSnapshot)=>{
    let fetch
    if (lastBlog) {
        fetch = await getMyBlogs(userId,lastBlog)
    } else {
        fetch = await getMyBlogs(userId)
    }
    return fetch
}

export const handleDelete = async (blogId:string)=>{
    await deleteBlog(blogId)
}