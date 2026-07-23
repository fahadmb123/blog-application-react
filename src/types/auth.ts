import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { User as fireBaseUserType} from "firebase/auth";
import type {UseFormHandleSubmit,UseFormRegister,FieldErrors} from "react-hook-form";
import type { BlogFormData } from "../validation/blogSchema";
import type { QueryDocumentSnapshot } from "firebase/firestore";

export type User = {
    id?: string,
    email : string,
    password : string
}

export type UserProviderProps = {
  children: ReactNode;
};

export type UserContextType = {
    user:fireBaseUserType | undefined,
    setUser:Dispatch<SetStateAction<fireBaseUserType | undefined>>,
    load:boolean
}

export type BlogType = {
    id?:string,
    title : string,
    description : string,
    userId?:string
}
export type BlogFormProps = {
    handleSubmit : UseFormHandleSubmit<BlogFormData>;
    onSubmit : (data:BlogFormData)=>void | Promise<void>;
    register : UseFormRegister<BlogFormData>;
    errors : FieldErrors<BlogFormData>;
    button:string
}
export type BlogCardProps = {
    title: string;
    description: string;
    cardId?:string
    setBlogs?:Dispatch<SetStateAction<BlogType[]>>;
    author?:string
}

export type AllBlogsResponse = {
    blogs: BlogType[];
    lastDoc: QueryDocumentSnapshot | null;
};
