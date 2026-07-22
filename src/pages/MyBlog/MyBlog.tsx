import "./MyBlog.css";
import BlogCard from "../../components/Blog/BlogCard";


function MyBlog() {
  const description = "This is the Description"
  const title = "This is the Big title"
  return (
    <div className="myBlog">

      <h1>My Blogs</h1>

      <BlogCard title={title} description={description} />

    </div>
  );
}

export default MyBlog;