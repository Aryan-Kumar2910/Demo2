// src/pages/LoginPage.jsx

import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './Login.css'; // We'll create this next

const LoginPage = () => {
  // Get the role from the URL (e.g., 'user', 'kabadiwala', 'artisan', 'admin')
  const { role } = useParams(); 
  const navigate = useNavigate(); // For redirecting after login

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, you would verify email and password here.
    // For our demo, we will just log the details and redirect.
    console.log(`Logging in as ${role} with email: ${email}`);
    
    // Redirect to the correct dashboard based on the role
    if (role) {
      navigate(`/${role}`);
    } else {
      // Fallback to the homepage if the role is not defined
      navigate('/');
    }
  };

  // Capitalize the role for a nice title
  const roleTitle = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'User';

  return (
    <div className="login-page-container">
      <div className="login-card">
        <div className="login-branding">
          <h2>Scrap2Value</h2>
          <p>Welcome back! Please login to your {roleTitle} account.</p>
        </div>
        <div className="login-form">
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <label htmlFor="email">Email </label>
              <input 
                type="email" 
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            <div className="form-actions">
              <Link to="#" className="forgot-password">Forgot Password?</Link>
            </div>
            <button type="submit" className="btn btn-primary login-btn">Login</button>
            <div className="signup-link">
              <p>Don't have an account? <Link to="#">Sign Up</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;