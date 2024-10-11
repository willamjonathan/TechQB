import "../styles/Login.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import axios from 'axios';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(''); // State for success/error messages

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/login', { email, password });
            console.log(response.data);
            // Set success message
            setMessage('Login successful! Welcome back.');
        } catch (error) {
            console.error('Login error:', error);
            // Set error message
            setMessage('Login failed! Please check your credentials.');
        }
    };

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5001/api/register', { email, password });
            console.log(response.data);
            // Set success message
            setMessage('Registration successful! You can now log in.');
        } catch (error) {
            console.error('Registration error:', error);
            // Set error message
            setMessage('Registration failed! Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className="rectangle">
                <div className="login-before">
                    <div className="login">
                        <div className="login-container">
                            <h2>{isLogin ? 'Login' : 'Register'}</h2>
                            {message && <div className="message">{message}</div>} {/* Display message */}
                            {isLogin ? (
                                <form onSubmit={handleLoginSubmit}>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Login</button>
                                </form>
                            ) : (
                                <form onSubmit={handleRegisterSubmit}>
                                    <div>
                                        <label>Email:</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>Password:</label>
                                        <input
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button type="submit">Register</button>
                                </form>
                            )}
                            <div className="login-reg" onClick={() => setIsLogin(!isLogin)}>
                                Switch to {isLogin ? 'Register' : 'Login'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
