import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { JSX, useEffect, useState } from "react";

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
  //TODO: Not correct way of checking need to hit backend & verify with jwt decode & authenticate cause user can manually set in local storage
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true); // Set authenticated if token exists
    } else {
      setIsAuthenticated(false); // Set false if no token
    }

    setLoading(false); // Set loading to false once authentication check is done
  }, []);

  // If the app is loading (checking token), don't render routes yet
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
