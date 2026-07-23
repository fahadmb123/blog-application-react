import "./BlogCard.css";
import type { BlogCardProps } from "../../types/auth";
import { handleDelete } from "../../services/BlogService";

export default function BlogCard({title,description,cardId,setBlogs}: BlogCardProps) {
    function OnEdit(id:string){
        console.log(id)
    }
    const onDelete = async (id:string)=>{
        await handleDelete(id)

        setBlogs((prev)=>prev.filter((blog)=>blog.id !== id))
    }
    return (
        <div className="blog-card">
            <h2 className="blog-title">{title}</h2>

            <p className="blog-description">
                {description}
            </p>

            {cardId && 
            <div className="blog-actions">
                <button className="edit-btn" onClick={()=>{OnEdit(cardId)}}>
                    Edit
                </button>
                <button className="edit-btn delete" onClick={()=>{onDelete(cardId)}}>
                    Delete
                </button>
            </div>}
        </div>
    );
}