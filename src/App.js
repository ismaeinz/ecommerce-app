import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductDeta from "./components/ProductDeta";
import ProductsList from "./components/ProductsList";
import Slider from "./components/Slider";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDeta />} />
      </Routes>
    </div>
  );
};

export default App;
