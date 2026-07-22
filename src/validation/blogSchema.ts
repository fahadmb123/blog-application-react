import {z} from "zod"


export const blogSchema = z.object({
    title:z.string().trim().min(3,"Title must be atleast 3 letters"),
    description:z.string().trim().min(10,"Description atleast 10 letters")
})