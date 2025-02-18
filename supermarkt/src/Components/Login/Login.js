import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import { getBaseURL } from "../apiConfig";
import TokenRefresher from "../Utils/token"; 

function Login({ setUserAuthenticatedStatus, navigateToRegisterPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to validate email format
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Function to validate password length
  const validatePassword = (password) => password.length >= 6;

  // Function to validate inputs
  const validateInputs = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return false;
    } 
    if (!validatePassword(password)) {
      setError("Password must be at least 6 characters long.");
      return false;
    }
    setError("");
    return true;
  };

  // Handle login button click
  const handleLogin = async () => {
    if (!validateInputs()) return;

    setLoading(true);
    try {
      const url = `${getBaseURL()}api/users/login`;
      const response = await axios.post(url, { email, password });

      if (response.data.length > 0) {
        const user = response.data[0];
        sessionStorage.setItem("isUserAuthenticated", true);
        sessionStorage.setItem("customerId", user.userId);
        sessionStorage.setItem("isAdmin", user.isAdmin ? "true" : "false");
        sessionStorage.setItem("jwt_token", user.token);
        sessionStorage.setItem("jwt_refresh_token", user.refreshToken);
        TokenRefresher(user.refreshToken);

        setUserAuthenticatedStatus(user.isAdmin, user.userId);

        // Redirect based on role
        navigate(user.isAdmin ? "/admin-dashboard" : "/customer");
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
      </div>
      <div>
        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />
      </div>
      {error && <div className="error-message">{error}</div>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <div className="register-link" onClick={navigateToRegisterPage}>
        New User? Register Here
      </div>
    </div>
  );
}

export default Login;
