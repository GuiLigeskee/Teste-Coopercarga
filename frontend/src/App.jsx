import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<ProductListPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
