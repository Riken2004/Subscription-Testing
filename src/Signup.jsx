import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';
import { Link } from 'react-router-dom';
import './App.css';
import './Signup.css';

const Signup = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((preValue) => ({
            ...preValue,
            [name]: value
        }));
    };

    return (
        <div className="signup-container">
            <h2 className="signup-title">Create a DEV@Deakin Account</h2>

            <Input 
                name="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                value={contact.name}
                className="signup-input"
            />

            <Input 
                name="email"
                type="email"
                placeholder="E-mail"
                onChange={handleChange}
                value={contact.email}
                className="signup-input"
            />

            <Input 
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value={contact.password}
                className="signup-input"
            />

            <Input 
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={contact.confirmPassword}
                className="signup-input"
            />

            <Button 
                type="submit"
                text="Create"
                className="signup-button"
            />

            <p className="login-text">
                Already have an account? <Link to="/login" className="login-link">Login</Link>
            </p>
        </div>
    );
};

export default Signup;
