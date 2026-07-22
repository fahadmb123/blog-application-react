import { addBlog } from "../repositories/blogRepository";
import type { BlogType } from "../types/auth";


export const newBlog = async (blog:BlogType,userId:string)=>{
    await addBlog(blog,userId)
    return {message:"Blog added successfully"}
} 