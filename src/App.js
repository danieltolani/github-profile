import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/home";
import ErrorPage from "./components/error-page";

import '../src/styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={< ErrorPage />}> </Route>
      </Routes>
    </Router>
  );
}

export default App;
