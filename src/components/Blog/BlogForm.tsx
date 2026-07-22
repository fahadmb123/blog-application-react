import type { BlogFormProps } from "../../types/auth";
import "./BlogForm.css"

export default function BlogForm({handleSubmit,onSubmit,register,errors,button}:BlogFormProps){
    return (
        <form onSubmit={handleSubmit(onSubmit)}>

        <input {...register("title")}
          type="text"
          placeholder="Blog Title"
        />
        {errors.title && (<p className="errorMessage">{errors.title?.message}</p>)}

        <textarea {...register("description")}
         placeholder="Write your blog..."></textarea>
         {errors.description && (<p className="errorMessage">{errors.description?.message}</p>)}

        <button>{button}</button>

      </form>
    )
}