import { useForm } from "react-hook-form";
import "./AddBlog.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, type BlogFormData} from "../../validation/blogSchema";
import BlogForm from "../../components/Blog/BlogForm"
import { toast } from "react-toastify";
import { editBlog, newBlog } from "../../services/BlogService";
import { useUserContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function AddBlog() {
  const {id} = useParams()
  const {user} = useUserContext()
  const {register,handleSubmit,formState:{errors},reset} = useForm<BlogFormData>({
    resolver:zodResolver(blogSchema),mode : "onChange"
  })
  
  
  const onSubmit = async (data:BlogFormData)=>{
    
    if (!user) return
    const fetch = await newBlog(data,user?.uid)
    toast.success(fetch.message)
    reset()
  }

  const text = id? "Edit Blog" : "Add Blog"



  useEffect (()=>{
    if (!id) return 
    const work = async ()=>{
      const data = await editBlog(id)
      
      reset ({
        title : data?.title,
        description : data?.description
      })
      
    }
    work()
  },[id,reset])



  return (
    <div className="addBlog">
      <h1>{text}</h1>
      <BlogForm 
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      onSubmit={onSubmit}
      button={text}
      />
    </div>
  );
}

export default AddBlog;