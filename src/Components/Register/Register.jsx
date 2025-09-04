import React from "react";
import { NavLink } from "react-router";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
    const handleRegisterForm = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password); 
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result);
            })
            .catch((error)=>{
                console.log(error);
            })
    }
    return (
        <div className="my-10 mx-auto">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form onSubmit={handleRegisterForm} className="fieldset">
                        <label className="label">Name</label>
                        <input name="name" type="name" className="input" placeholder="Name" />
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input" placeholder="Password" />
                        <div>
                            <a className="link link-hover">Forgot password?</a>
                        </div>
                        <button className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p>Already Have Account ? Please <NavLink className='hover:underline' to='/login'>Login</NavLink></p>
                </div>
            </div>
        </div>
    );
};
export default Register;
