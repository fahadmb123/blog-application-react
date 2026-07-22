import { useForm } from "react-hook-form";
import "./AddBlog.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, type BlogFormData} from "../../validation/blogSchema";
import BlogForm from "../../components/Blog/BlogForm"


function AddBlog() {
  const {register,handleSubmit,formState:{errors}} = useForm<BlogFormData>({
    resolver:zodResolver(blogSchema),mode : "onChange"
  })

  const onSubmit = async (data:BlogFormData)=>{
    console.log(data)
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