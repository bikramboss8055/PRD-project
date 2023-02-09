import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Signup from "../components/Signup";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            
            <Navbar /> <Footer />
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
