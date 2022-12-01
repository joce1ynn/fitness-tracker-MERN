import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const RenderPage = () => {
    switch (currentPage) {
      case "Home":
      default:
        return <Home />;
      case "Exercise":
        return <Exercise />;
      case "History":
        return <History />;
      case "Login":
        return <Login />;
    }
  };
  return (
    <div>
      <Header setCurrentPage={setCurrentPage} />
      <RenderPage />
    </div>
  );
}

export default App;
