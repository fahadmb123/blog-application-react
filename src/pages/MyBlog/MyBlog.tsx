import "./MyBlog.css";
import BlogCard from "../../components/Blog/BlogCard";
import { useEffect, useState } from "react";
import { getMyBlogs } from "../../repositories/blogRepository";
import { useUserContext } from "../../context/AuthContext";


function MyBlog() {
  const description = "This is the Description"
  const title = "This is the Big title"
  const [blogs,setBlogs] = useState([])
  const {user} = useUserContext()
  useEffect(()=>{
    const work = async ()=>{
      if (!user) return
      const fetch = await getMyBlogs(user?.uid)
      console.log(fetch)
    }
    work()
  },[])
  return (
    <div className="myBlog">

      <h1>My Blogs</h1>

      <BlogCard title={title} description={description} />

    </div>
  );
}

export default MyBlog;