import { useForm } from 'react-hook-form';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { loginSchema, type LoginFormData } from '../../validation/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginUser } from '../../services/AuthService';
import { toast } from 'react-toastify';



function Login() {
  const {register,handleSubmit,formState:{errors}} = useForm<LoginFormData>({
    resolver : zodResolver(loginSchema),mode : "onChange"
  })
  const navigate = useNavigate()


  const onSubmit = async (data:LoginFormData)=>{
    const fetch = await LoginUser(data)

    if (fetch.did) {
      navigate("/")
    }else {
      toast.error(fetch.message)
    }
  }
  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Welcome Back</h1>

        <p>Login to continue</p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (<p className="errorMessage">{errors.email?.message}</p>)}

          <input {...register("password")}
            type="password"
            placeholder="Enter your password"
          />
          {errors.password && (<p className="errorMessage">{errors.password?.message}</p>)}

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