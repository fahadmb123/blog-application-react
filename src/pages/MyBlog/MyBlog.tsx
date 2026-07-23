import "./MyBlog.css";
import BlogCard from "../../components/Blog/BlogCard";
import { useEffect, useState } from "react";
import { getMyBlogs } from "../../repositories/blogRepository";
import { useUserContext } from "../../context/AuthContext";
import type { BlogType } from "../../types/auth";


function MyBlog() {
  
  const [blogs,setBlogs] = useState<BlogType[]>([])
  const {user} = useUserContext()
  useEffect(()=>{
    const work = async ()=>{
      if (!user) return
      const fetch = await getMyBlogs(user?.uid)
      setBlogs((prev)=>{return [...prev,...fetch]})
    }
    work()
  },[])
  return (
    <div className="myBlog">

      <h1>My Blogs</h1>

      {blogs.map((blg)=>(
        <BlogCard cardId={blg.id} title={blg.title} description={blg.description} />
      ))}

    </div>
  );
}

export default MyBlog;