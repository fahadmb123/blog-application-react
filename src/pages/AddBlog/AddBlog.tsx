import { useForm } from "react-hook-form";
import "./AddBlog.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, type BlogFormData} from "../../validation/blogSchema";
import BlogForm from "../../components/Blog/BlogForm"
import { toast } from "react-toastify";
import { newBlog } from "../../services/BlogService";
import { useUserContext } from "../../context/AuthContext";



function AddBlog() {
  const {register,handleSubmit,formState:{errors},reset} = useForm<BlogFormData>({
    resolver:zodResolver(blogSchema),mode : "onChange"
  })
  const {user} = useUserContext()
  
  const onSubmit = async (data:BlogFormData)=>{
    if (!user) return
    const fetch = await newBlog(data,user?.uid)
    toast.success(fetch.message)
    reset()
  }
  const buttonText = "Add Blog"
  return (
    <div className="addBlog">
      <h1>Add Blog</h1>
      <BlogForm 
      handleSubmit={handleSubmit}
      register={register}
      errors={errors}
      onSubmit={onSubmit}
      button={buttonText}
      />
    </div>
  );
}

export default AddBlog;