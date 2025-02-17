import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { JSX, useEffect, useState } from "react";

// 404 Not Found Page Component
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p className="text-gray-600 mt-2">
        The page you are looking for does not exist.
      </p>
      <a href="/signin" className="text-blue-600 mt-4 hover:underline">
        Go to Sign In
      </a>
    </div>
  );
};

// Protected Route Component
const ProtectedRoute = ({
  children,
  isAuthenticated,
}: {
  children: JSX.Element;
  isAuthenticated: boolean;
}) => {
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

function App() {
  const [userProfile, setUserProfile] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

  // Effect to check token and update authentication status
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect base URL to Signin */}
        <Route path="/" element={<Navigate to="/signin" />} />

        {/* Auth Routes */}
        <Route
          path="/signup"
          element={
            <Signup
              setUserProfile={setUserProfile}
              setIsAuthenticated={setIsAuthenticated}
              userProfile={userProfile}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Signin
              setUserProfile={setUserProfile}
              setIsAuthenticated={setIsAuthenticated}
              userProfile={userProfile}
            />
          }
        />

        {/* Protected Routes */}
        <Route
          path="/blog/:id"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Blog userProfile={userProfile} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/blogs"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Blogs userProfile={userProfile} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/publish"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Publish userProfile={userProfile} />
            </ProtectedRoute>
          }
        />

        {/* Catch-all Route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
