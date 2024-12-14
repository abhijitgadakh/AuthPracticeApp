import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return handleError("All fields are required");
    }

    try {
      // const url = "http://localhost:8080/auth/login";
      const url = "https://auth-practice-server-alpha.vercel.app/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      localStorage.setItem("token", result.jwtToken);
      localStorage.setItem("loggedInUserName", result.user.name);
      localStorage.setItem("loggedInUserEmail", result.user.email);
      localStorage.setItem("loggedInUserId", result.user.id);

      if (result.success) {
        handleSuccess(result.message);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      } else if (result.error) {
        handleError(result.error?.details[0].message);
      } else {
        handleError(result.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="form-button">
          Login
        </button>
        <p className="form-text">
          Don't have an account? <a href="/sign-up">Sign up</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
