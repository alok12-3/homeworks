import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    className: "",
    board: "",
    username: "",
    password: "",
    category: "",
  });
  const handleClick = () => {
    navigate("/");
  };
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/users/register", formData);
      navigate("/login");
    } catch (error) {
      console.error("Signup error", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen relative">
      <button
        className="absolute top-4 right-8 text-gray-500 hover:text-gray-700 text-4xl"
        aria-label="Close"
        onClick={handleClick}
      >
        &times;
      </button>
      <div className="bg-white px-8 rounded w-full max-w-md">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Create your account
        </h2>
        <form
          onSubmit={handleSignUp}
          className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        >
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="s">Student</option>
              <option value="t">Teacher</option>
              <option value="p">Principal</option>
            </select>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="schoolName"
              placeholder="School Name"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="className"
              placeholder="Class"
              value={formData.className}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="board"
              placeholder="Board"
              value={formData.board}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
