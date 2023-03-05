import React, { useState } from "react";
import './Login.css';
import Navbar from "./Navbar";
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === '' || password === '') {
            alert("Please fill in all the fields");
        }
        else {
            setEmail('');
            setPassword('');
            alert("Logged In");
            return;
        }
    }
    return (
        <div className="loginContainer">
            <Navbar />
            <div className="login">
                <form onSubmit={handleSubmit} method="POST" action="#">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onChange={handleEmail} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={handlePassword} value={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="register">
                        <Link to='/register'><p>Not a registered user? Click here to Register</p></Link>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;