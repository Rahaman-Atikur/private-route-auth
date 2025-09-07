import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../main";
const Login = () => {
  const userInfo = use(AuthContext);
  console.log(userInfo);
  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
  }
  return (
    <div className="my-10 mx-auto">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />
            <label className="label">Password</label>
            <input
              name="password"
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
