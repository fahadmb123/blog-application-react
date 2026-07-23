import { useForm } from "react-hook-form";
import "./AddBlog.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, type BlogFormData} from "../../validation/blogSchema";
import BlogForm from "../../components/Blog/BlogForm"
import { toast } from "react-toastify";
import { newBlog } from "../../services/BlogService";
import { useUserContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";


function AddBlog() {
  const {id} = useParams()


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

  let text
  if (id) {
    text = "Edit Blog"
  }else {
    text = "Add Blog"
  }


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