import "./MyBlog.css";
import BlogCard from "../../components/Blog/BlogCard";
import { useEffect, useState } from "react";
import { getMyBlogs } from "../../repositories/blogRepository";
import { useUserContext } from "../../context/AuthContext";
import type { BlogType } from "../../types/auth";
import type { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";


function MyBlog() {
  
  const [blogs,setBlogs] = useState<BlogType[]>([])
  const {user} = useUserContext()
  const [lastBlog,setLastBlog] = useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [needMore,setNeedMore] = useState<boolean>(true)
  
  useEffect(()=>{
    const work = async ()=>{
      if (!user) return
      const fetch = await getMyBlogs(user?.uid)
      setBlogs((prev)=>{return [...prev,...fetch.data]})
      setLastBlog(fetch.lastDoc)
      if (fetch.data.length < 10) {
        setNeedMore(false)
      }
    }
    work()
  },[])
  const viewMore = async ()=>{
    if (!user) return
    if (!lastBlog) return
    const fetch = await getMyBlogs(user?.uid,lastBlog)
    setBlogs((prev) => [...prev,...fetch.data])
    if (fetch.data.length < 10) {
      setNeedMore(false)
    }
  }

  return (
    <div className="myBlog">

      <h1>My Blogs</h1>

      {blogs.map((blg)=>(
        <BlogCard cardId={blg.id} title={blg.title} description={blg.description} />
      ))}

      {needMore && 
      (<div className="view-more">
        <button onClick={viewMore} className="view-btn">
          View More
      </button>
      </div>)}
    </div>
  );
}

export default MyBlog;