import React from "react";
import SolidButton from "../my_components/buttons/SolidButton";
import LightButton from "../my_components/buttons/LightButton";
import InputField from "../my_components/inputfields/InputField";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

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
        {/* <form> */}
        <InputField type="email" placeholder="Email" />
        <InputField type="password" placeholder="Password" />

        <div className="flex justify-between items-center mb-4">
          <button className="text-blue-500 hover:underline">
            Forgot Password?
          </button>
        </div>
        <SolidButton
          buttonText="LOGIN"
          widthPercentage="100%"
          route="/student/dashboard"
        />
        <div className="flex items-center my-4">
          <div className="flex-grow border-t"></div>
          <span className="mx-2 text-gray-500">OR</span>
          <div className="flex-grow border-t"></div>
        </div>
        <div className="flex justify-between">
          <LightButton buttonText="PHONE" widthPercentage="45%" />
          <LightButton buttonText="GOOGLE" widthPercentage="45%" />
        </div>
        {/* </form> */}
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
          <p className="mt-2">
            Don't have an account?{" "}
            <a href="#" className="underline text-blue-500">
              SIGN UP
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
