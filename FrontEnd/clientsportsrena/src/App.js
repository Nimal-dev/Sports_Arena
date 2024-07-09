import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./Components/Post";
import Register from "./Components/Register";
import Login from "./Components/Login";

function App() {
  const authenticated = JSON.parse(localStorage.getItem("userdata"));

  return (
    <>
      <BrowserRouter>
        <Routes>
          {authenticated == null ? (
            <>
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Login />} />
            </>
          ) : authenticated.type === 0 ? (
            <>
              <Route path="/" element={<Post />} />
            </>
          ) : null}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
