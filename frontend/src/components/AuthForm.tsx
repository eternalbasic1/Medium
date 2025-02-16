import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export const AuthForm = () => {
  const location = useLocation();
  const isSignup = location.pathname === "/signup";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = { name, email, password };
    console.log(isSignup ? "Signup Data:" : "Signin Data:", formData);
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
                value={name}
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
              value={email}
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
              value={password}
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
