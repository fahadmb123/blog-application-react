import "./Signup.css";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import type {SignupFormData } from "../../validation/authSchema";
import { signupSchema } from "../../validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";


function Signup() {
  const {register,handleSubmit,formState:{errors}} = useForm<SignupFormData>({
    resolver : zodResolver(signupSchema),mode : "onChange"
  })

  

  function onSubmit(data:SignupFormData) {
    console.log(data)
    
  }
  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>Register to start blogging</p>

        <form onSubmit={handleSubmit(onSubmit)}>

          <input {...register("name")}
            type="text"
            placeholder="Enter your name"
          />
          {errors.name && (<p className="errorMessage">{errors.name?.message}</p>)}

          <input {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email && (<p className="errorMessage">{errors.email?.message}</p>)}

          <input {...register("password")}
            type="password"
            placeholder="Create password"
          />
          {errors.password && (<p className="errorMessage">{errors.password?.message}</p>)}

          <input {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Your Password"
          />
          {errors.confirmPassword && (<p className="errorMessage">{errors.confirmPassword?.message}</p>)}

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