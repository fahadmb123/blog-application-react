import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Login to continue</p>

        <form>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <input
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="bottom-text">
          Don't have an account?
          <Link  to="/signup"> Sign Up</Link>
        </p>

      </div>

    </div>
  );
}

export default Login