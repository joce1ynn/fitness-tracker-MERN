import React from "react";
// rename browserRouter as router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages and components
import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import SingleExercise from "./pages/SingleExercise"
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/exercise/:type/:id" element={<SingleExercise />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
