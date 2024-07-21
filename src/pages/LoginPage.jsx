import React from "react";
import SolidButton from "../my_components/buttons/SolidButton";
import LightButton from "../my_components/buttons/LightButton";
import InputField from "../my_components/inputfields/InputField";
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="text-right">
          <button className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>
        <h2 className="text-2xl font-bold mb-8 text-center">Log in</h2>
        <form>
          <InputField type="email" placeholder="Email"></InputField>
          <InputField type="password" placeholder="Password"></InputField>

          <div className="flex justify-between items-center mb-4">
            <button className="text-blue-500 hover:underline">
              Forgot Password?
            </button>
          </div>
          <SolidButton buttonText="LOGIN" widthPercentage="100%"></SolidButton>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t"></div>
            <span className="mx-2 text-gray-500">OR</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="flex justify-between">
            <LightButton buttonText="PHONE" widthPercentage="45%"></LightButton>
            <LightButton
              buttonText="GOOGLE"
              widthPercentage="45%"
            ></LightButton>
          </div>
        </form>
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
