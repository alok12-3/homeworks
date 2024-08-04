import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/userinput";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Add state for password
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/auth/login`,
        { username, password }
      );
      localStorage.setItem("token", response.data.token);
      navigate(`/student/dashboard/${username}`);
    } catch (error) {
      console.error("Error fetching student:", error);
      setError(
        error.response ? error.response.data.message : "Failed to fetch student"
      );
    }
  };
  const handleClick = () => {
    navigate("/");
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
        <h2 className="text-2xl font-bold mb-8 text-center">Log in</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <Input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <Input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>
          <Button variant="solid" size="full" type="submit">
            Login
          </Button>
          <div className="mt-4 text-center text-gray-500 text-sm">
            <p>
              By signing in to Mimir, you agree to our{" "}
              <a href="#" className="underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-gray-500">Don't have an account?</span>
            <div className="flex-grow border-t"></div>
          </div>

          <Link
            to="/signup"
            className={buttonVariants({
              variant: "light",
              size: "full",
            })}
          >
            <div className="text-sm font-semibold">CREATE NEW ACCOUNT</div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
