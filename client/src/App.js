import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<Signup />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
