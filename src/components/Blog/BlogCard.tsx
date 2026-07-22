import "./BlogCard.css";
import type { BlogCardProps } from "../../types/auth";

export default function BlogCard({title,description}: BlogCardProps) {
    function OnEdit(){}
    return (
        <div className="blog-card">
            <h2 className="blog-title">{title}</h2>

            <p className="blog-description">
                {description}
            </p>

            <div className="blog-actions">
                <button className="edit-btn" onClick={OnEdit}>
                    Edit
                </button>
            </div>
        </div>
    );
}