import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { LogOut } from "../../services/AuthService";
import { toast } from "react-toastify";


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
  return (
    <nav className="navbar">

      <h2>My Blog</h2>

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
          <button className="logout-btn" onClick={handleLogOut}>Log Out</button>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;