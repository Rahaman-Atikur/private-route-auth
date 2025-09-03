import React from "react";
import { NavLink } from "react-router";
const Login = () => {
  return (
    <div className="my-10 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form className="fieldset">
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login Now</button>
          </form>
          <p>Don't Have Account ? Please <NavLink className='hover:underline' to='/register'>Register</NavLink></p>
        </div>
      </div>
    </div>
  );
};
export default Login;
