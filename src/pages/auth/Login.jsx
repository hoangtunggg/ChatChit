import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Login.css";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/"); 
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <div className="brand-header">
            <Logo className="logo-svg" />
            <span className="brand-name">ChatChit</span>
          </div>
        </div>
        <div className="input-group">
          <label htmlFor="email">Username</label>
          <input
            id="username"
            type="username"
            placeholder="username"
          />
        </div>

        <div className="input-group">
          <div className="label-row">
            <label htmlFor="password">Password</label>
            <a href="#" className="forgot">Forgot?</a>
          </div>
          <input
            id="password"
            type="password"
            placeholder="password"
          />
        </div>

        <button className="login-button" onClick={handleLogin}>Account Login</button>

        <div className="divider">OR USE WITH</div>

        <div className="social-buttons">
          <button className="google-button">
            <i className="fab fa-google"></i> Google
          </button>

          <button className="facebook-button">
            <i className="fab fa-facebook-f" style={{ marginRight: "8px" }}></i>
            Facebook
          </button>
        </div>

        <div className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </div>
  );
}

export default Login;