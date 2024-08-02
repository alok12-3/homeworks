import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginStudent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Add state for password
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate(`/student/${username}`);
    } catch (error) {
      console.error("Error fetching student:", error);
      setError(
        error.response ? error.response.data.message : "Failed to fetch student"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default LoginStudent;
