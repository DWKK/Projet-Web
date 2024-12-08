import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Pays from "./Pays";
import Langues from "./Langues";
import Footer from "./Footer";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Navigate to="/pays" />} />
          <Route path="/pays" element={<Pays />} />
          <Route path="/langues" element={<Langues />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
