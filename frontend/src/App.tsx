import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Blog } from "./pages/Blog";
import "./index.css";
import { Blogs } from "./pages/Blogs";
import { Publish } from "./pages/Publish";
import { useState } from "react";

function App() {
  const [userProfile, setUserProfile] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={
              <Signup
                setUserProfile={setUserProfile}
                userProfile={userProfile}
              />
            }
          />
          <Route
            path="/signin"
            element={
              <Signin
                setUserProfile={setUserProfile}
                userProfile={userProfile}
              />
            }
          />
          <Route
            path="/blog/:id"
            element={<Blog userProfile={userProfile} />}
          />
          <Route path="/blogs" element={<Blogs userProfile={userProfile} />} />
          <Route
            path="/publish"
            element={<Publish userProfile={userProfile} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
