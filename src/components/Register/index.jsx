import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Alert } from "../Alert";
import "./register.css";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters");
      } else if (error.code === "auth/invalid-email") {
        setError("Invalid email");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Email already in use");
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="container-login-register">
      <div className="container-log">
        {error && <Alert message={error} />}

        <form onSubmit={handleSubmit} className="login-register">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="youremail@mail.com"
            onChange={handleChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="*******"
            onChange={handleChange}
          />

          <button>Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
