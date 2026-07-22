import { addBlog } from "../repositories/blogRepository";
import type { BlogType } from "../types/auth";


export const AddBlog = async (blog:BlogType)=>{
    await addBlog(blog)
    return {message:"Blog added successfully"}
} 