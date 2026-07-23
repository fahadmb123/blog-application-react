import "./Home.css";
import BlogCard from "../../components/Blog/BlogCard";
import { useEffect, useState } from "react";
import type { BlogType } from "../../types/auth";
import { allBlogs } from "../../services/BlogService";
import { useUserContext } from "../../context/AuthContext";
import type { QueryDocumentSnapshot,DocumentData } from "firebase/firestore";
//setBlogs={setBlogs} cardId={blg.id} title={blg.title} description={blg.description}


function Home() {
  const [blogs,setBlogs] = useState<BlogType[]>([])
  const {user} = useUserContext()
  const [lastBlog,setLastBlog] = useState<QueryDocumentSnapshot<DocumentData> | null>(null)
  const [needMore,setNeedMore] = useState<boolean>(true)
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(()=>{
    const work = async ()=>{
      const result = await allBlogs()
      setBlogs((prev)=>[...prev,...result.blogs])
      setLastBlog(result.lastDoc)
      if (result.blogs.length < 10) {
        setNeedMore(false)
      }
      setLoading(false)
    }
    work()
  },[])


  const viewMore = async ()=>{
      if (!lastBlog) return
      const fetch = await allBlogs(lastBlog)
      setBlogs((prev) => [...prev,...fetch.blogs])
      setLastBlog(fetch.lastDoc)
      if (fetch.blogs.length < 10) {
        setNeedMore(false)
      }
      
  }

  
  if (loading) {
    return (
      <div className="myBlog">
        <h1>Loading..</h1>
      </div>
    )
  }

  return (
    <div className="home">
      <div className="home-header">
        <h1>Welcome to Blog Application</h1>

        <p>Read amazing blogs from different authors.</p>
        {blogs.length === 0 && (<p>There are no Blogs Yet Sorry...</p>)}
      </div>

      <div className="blog-container">
        {blogs.map((blg) => (
          <div className="blog" >
            <BlogCard
              author={blg.userId === user?.uid ? "You" : blg.author}
              title={blg.title}
              description={blg.description}
            />
          </div>
        ))}
      </div>

      {needMore && (
        <div className="view-more">
          <button onClick={viewMore} className="view-btn">
            View More
          </button>
        </div>
      )}
</div>
)}

export default Home;