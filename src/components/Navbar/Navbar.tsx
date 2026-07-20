import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>My Blog</h2>

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/add-blog">Add Blog</Link>
        </li>

        <li>
          <Link to="/my-blog">My Blogs</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;