import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>My Blog</h2>

      <ul>

        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/add-blog">Add Blog</NavLink>
        </li>

        <li>
          <NavLink to="/my-blog">My Blogs</NavLink>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;