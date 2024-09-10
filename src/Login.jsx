import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import './App.css';
import './Login.css';
import { signInWithGooglePopup, createUserDocFromAuth } from './utils/firebase';

const Login = () => {
    const [contact, setContact] = useState({
        username: '',
        password: ''
    });

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocFromAuth(user);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Log In</h2>

            <Input 
                name="username"
                type="text"
                placeholder="Username"
                onChange={handleChange}
                value={contact.username}
                className="login-input"
            />

            <Input 
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={contact.password}
                className="login-input"
            />

            <Button 
                type="submit"
                text="Login"
                className="login-button"
            />

            <button onClick={logGoogleUser} className="google-button">
                Log in with Google
            </button>

            <p className="signup-text">
                Don't have an account? <Link to="/Signup" className="signup-link">Sign up instead</Link>
            </p>
        </div>
    );
};

export default Login;
