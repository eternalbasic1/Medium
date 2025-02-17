import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { SigninInput, SignupInput } from "@yashodaramreddy/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface AuthFormProps {
  setUserProfile: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthForm = ({ setUserProfile }: AuthFormProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSignup = location.pathname === "/signup";
  const [signinInputs, setSigninInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const [signupInputs, setSignupInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isSignup) {
      setSignupInputs((prev: SignupInput) => ({ ...prev, [name]: value }));
    } else {
      setSigninInputs((prev: SigninInput) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // const formData = { name, email, password };
    // console.log(isSignup ? "Signup Data:" : "Signin Data:", formData);
    console.log(signinInputs);
    console.log(signupInputs);

    try {
      isSignup
        ? await axios
            .post(`${BACKEND_URL}/user/signup`, {
              password: signupInputs?.password,
              email: signupInputs?.email,
              name: signupInputs?.name,
            })
            .then(function (response) {
              const jwt = response.data.jwt;
              localStorage.setItem("token", jwt);
              setUserProfile(response.data.name || "Anonymous");
              navigate("/blogs");
            })
            .catch(function (error) {
              console.log(error);
            })
        : await axios
            .post(`${BACKEND_URL}/user/signin`, {
              password: signinInputs?.password,
              email: signinInputs?.email,
            })
            .then(function (response) {
              const jwt = response.data.jwt;
              localStorage.setItem("token", jwt);
              setUserProfile(response.data.name || "Anonymous");
              navigate("/blogs");
            })
            .catch(function (error) {
              console.log(error);
            });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-300">
        <h2 className="text-xl font-semibold text-black text-center mb-4">
          {isSignup ? "Create an Account" : "Welcome Back"}
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <Link to="/signin" className="text-blue-600 hover:underline">
                Sign In
              </Link>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </>
          )}
        </p>
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <div className="mb-4">
              <label className="block text-black mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                value={signupInputs.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={isSignup ? signupInputs.email : signinInputs.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete="current-password"
              value={isSignup ? signupInputs.password : signinInputs.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md transition"
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};
