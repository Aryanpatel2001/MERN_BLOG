import React, { useState } from "react";
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Header from "./components/Header";
import Projects from "./pages/Projects";
import Footer from "./components/Footer";
// import Forget from "./components/Forget";
import Reset from "./components/reset";

export const RecoveryContext = createContext();
export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        {/* <Route path="/forget-password" element={<Reset />}></Route> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
