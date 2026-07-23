import { addBlog, deleteBlog, getMyBlogs,getBlog, updateBlog, getAllDocs } from "../repositories/blogRepository";
import type { AllBlogsResponse, BlogType } from "../types/auth";
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

export const editBlog = async (id:string):Promise<BlogType | null>=>{
    const fetch = await getBlog(id)

    if (!fetch.exists()) {
        return null;
    }

    return {
        id: fetch.id,
        ...(fetch.data() as Omit<BlogType, "id">),
    };
}

export const handleUpdateBlog = async (blog:BlogType,id:string)=>{
    await updateBlog(blog,id)
    return {message:"Updated Successfully"}
}


export const allBlogs = async (lastBlog?:QueryDocumentSnapshot):Promise<AllBlogsResponse>=>{
    let fetch
    if (lastBlog) {
        fetch = await getAllDocs(lastBlog)
    } else {
        fetch = await getAllDocs()
    }
    return fetch
}