import "./BlogCard.css";
import type { BlogCardProps } from "../../types/auth";
import { handleDelete } from "../../services/BlogService";
import { useNavigate } from "react-router-dom";

export default function BlogCard({title,description,cardId,setBlogs,author}: BlogCardProps) {
    const navigate = useNavigate()


    function OnEdit(id:string){
        navigate(`/add-blog/${id}`)
    }
    const onDelete = async (id:string)=>{
        if (!setBlogs) return
        await handleDelete(id)

        setBlogs((prev)=>prev.filter((blog)=>blog.id !== id))
    }
    return (
        <div className="blog-card">
            {author && (
                <div className="blog-header">
                    <h3 className={`blog-author ${author === "You" ? "author" : ""}`}>By : {author}</h3>
                </div>
            )}

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