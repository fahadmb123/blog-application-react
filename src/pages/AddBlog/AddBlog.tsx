import { useForm } from "react-hook-form";
import "./AddBlog.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, type BlogFormData} from "../../validation/blogSchema";
import BlogForm from "../../components/Blog/BlogForm"
import { toast } from "react-toastify";
import { newBlog } from "../../services/BlogService";



function AddBlog() {
  const {register,handleSubmit,formState:{errors},reset} = useForm<BlogFormData>({
    resolver:zodResolver(blogSchema),mode : "onChange"
  })
  

  const onSubmit = async (data:BlogFormData)=>{
    const fetch = await newBlog(data)
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