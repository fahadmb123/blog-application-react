import { useForm } from "react-hook-form";
import "./AddBlog.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { blogSchema, type BlogFormData} from "../../validation/blogSchema";



function AddBlog() {
  const {register,handleSubmit,formState:{errors}} = useForm<BlogFormData>({
    resolver:zodResolver(blogSchema),mode : "onChange"
  })

  const onSubmit = async (data:BlogFormData)=>{
    console.log(data)
  }
  return (
    <div className="addBlog">
      <h1>Add Blog</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register("title")}
          type="text"
          placeholder="Blog Title"
        />
        {errors.title && (<p className="errorMessage">{errors.title?.message}</p>)}

        <textarea {...register("description")}
         placeholder="Write your blog..."></textarea>
         {errors.description && (<p className="errorMessage">{errors.description?.message}</p>)}

        <button>Add Blog</button>

      </form>
    </div>
  );
}

export default AddBlog;