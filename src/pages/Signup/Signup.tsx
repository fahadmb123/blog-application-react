import "./Signup.css";
import { Link } from "react-router-dom";
import {useForm} from "react-hook-form"
import type {SignupFormData } from "../../validation/authSchema";
import { signupSchema } from "../../validation/authSchema";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";


function Signup() {
  const {register,handleSubmit,formState} = useForm<SignupFormData>({
    resolver : zodResolver(signupSchema)
  })

  

  function onSubmit(data:SignupFormData) {
    console.log(data)
  }
  return (
    <div className="signup-container">

      <div className="signup-card">

        <h1>Create Account</h1>

        <p>Register to start blogging</p>

        <form>

          <input {...register("name")}
            type="text"
            placeholder="Enter your name"
          />

          <input {...register("email")}
            type="email"
            placeholder="Enter your email"
          />

          <input {...register("password")}
            type="password"
            placeholder="Create password"
          />

          <button onSubmit={handleSubmit(onSubmit)} type="submit">
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