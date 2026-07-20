import "./Signup.css";
import { Link } from "react-router-dom";



function Signup() {
  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>Register to start blogging</p>

        <form>

          <input
            type="text"
            placeholder="Enter your name"
          />

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Create password"
          />

          <button type="submit">
            Sign Up
          </button>

        </form>

        <p className="bottom-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  );
}

export default Signup;