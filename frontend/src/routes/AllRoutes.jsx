import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Sliders from "../components/Sliders";
import Signup from "../components/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            
            <Navbar /> <Sliders/> <Footer />
          </>
        }
      />
      <Route
        path="/signup"
        element={
          <>
            <Signup />
          </>
        }
      />
      <Route
        path="/login"
        element={
          <>
            <Login />
          </>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
