import "./BlogCard.css";
import type { BlogCardProps } from "../../types/auth";

export default function BlogCard({title,description,cardId}: BlogCardProps) {
    function OnEdit(id:string){
        console.log(id)
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
            </div>}
        </div>
    );
}