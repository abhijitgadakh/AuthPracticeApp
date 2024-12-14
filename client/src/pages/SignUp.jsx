import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils/utils";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      return handleError("All fields are required.");
    }

    if (password !== confirmPassword) {
      return handleError("Passwords do not match.");
    }

    try {
      const url = "http://localhost:8080/auth/register";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();

      if (result.success) {
        handleSuccess(result.message || "Account created successfully.");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else if (result.error) {
        handleError(result.error?.details[0].message || "Registration failed.");
      } else {
        handleError(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSignUp}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="form-button">
          Sign Up
        </button>
        <p className="form-text">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
