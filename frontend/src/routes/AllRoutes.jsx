import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Sliders from "../components/Sliders";
import Signup from "../components/Signup";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> <Sliders />
            <Products /> 
            <Footer />
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
      <Route path="/products/:id"
        element={
          <>
            <Navbar/>
            <SingleProduct/>
            <Footer/>
          </>
        }
      />
      
    </Routes>
  );
};

export default AllRoutes;
