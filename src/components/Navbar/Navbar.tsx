import {  NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { LogOut } from "../../services/AuthService";
import { toast } from "react-toastify";
import { useUserContext } from "../../context/AuthContext";


function Navbar() {
  const navigate = useNavigate()
  const handleLogOut = async ()=>{
    const fetch = await LogOut()
    if (fetch.did) {
      toast.success(fetch.message)
      navigate("/login")
    } else {
      toast.error(fetch.message)
    }
  }
  const {user} = useUserContext()
  return (
    <nav className="navbar">

      <div className="nav-title">
        <h2>My Blog </h2>
        {user && <span className="author-name">By {user.email}</span>}
      </div>

      <ul>

        <li>
          <NavLink className={({isActive})=>(isActive? 'active' : '')} to="/" end >Home</NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/add-blog">Add Blog</NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/my-blog">My Blogs</NavLink>
        </li>

        <li>
          {user && (<button className="logout-btn" onClick={handleLogOut}>Log Out</button>)}
          {!user && (<NavLink className="logout-btn" to="/login">Login</NavLink>)}
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;