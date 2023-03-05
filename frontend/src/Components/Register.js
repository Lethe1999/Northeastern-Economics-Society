import React, { useState } from "react";
import Navbar from "./Navbar";
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastName = (event) => {
        setLastname(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }
    const handleEnteredPassword = (event) => {
        event.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || password === '' || confirmPassword === '') {
            event.preventDefault();
            alert('Please fill all the fields!');
        }
        else if (password != confirmPassword) {
            alert('Entered password does not match!');
        }
        else {
            setFirstName('');
            setLastname('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            alert(`${firstName} registered sucessfully`);
            navigate('/login');
        }
    }

    return (
        <div>
            <Navbar />
            <div className="login">
                <form onSubmit={handleEnteredPassword} method="POST" action="#">
                    <div class="form-group">
                        <label for="firstName">First Name</label>
                        <input onChange={handleFirstName} type="text" value={firstName} class="form-control" id="firstName" placeholder="Enter First Name" />
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name</label>
                        <input onChange={handleLastName} type="text" value={lastName} class="form-control" id="lastName" placeholder="Enter Last Name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input onChange={handleEmail} type="email" value={email} class="form-control" id="email" placeholder="Enter Email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input onChange={handlePassword} type="password" value={password} class="form-control" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="confirmPassword">Confirm Pasword</label>
                        <input onChange={handleConfirmPassword} type="password" value={confirmPassword} class="form-control" placeholder="Re-enter the password" />
                    </div>
                    <button style={{ marginTop: '1rem' }} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Register;