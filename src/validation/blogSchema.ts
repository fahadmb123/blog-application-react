import {z} from "zod"


export const blogSchema = z.object({
    title:z.string().trim().min(5,"Title must be atleast 5 letters"),
    description:z.string().trim().min(10,"Description atleast 10 letters")
})

export type BlogFormData = z.infer<typeof blogSchema>