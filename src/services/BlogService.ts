import { addBlog } from "../repositories/blogRepository";
import type { BlogType } from "../types/auth";


export const newBlog = async (blog:BlogType)=>{
    await addBlog(blog)
    return {message:"Blog added successfully"}
} 