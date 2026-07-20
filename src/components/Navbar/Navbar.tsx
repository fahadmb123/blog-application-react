import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
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

      </ul>

    </nav>
  );
}

export default Navbar;