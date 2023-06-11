import React from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import MainRoute from "./mainroute/MainRoute";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainRoute />
      </Router>
    </div>
  );
}

export default App;
