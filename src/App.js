import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductSection from "./components/ProductSection";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import SearchPage from "./components/SearchPage";
import "./App.css";
import Signup from "./components/Signup";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen App">
        <Navbar onSearch={handleSearch} />
        <div className="flex-grow">
          <Routes>
          <Route
              path="/signup"
              element={<Signup/>}
            />
            <Route
              path="/"
              element={
                <>
                  <Carousel />
                  <ProductSection searchQuery={searchQuery} />
                </>
              }
            />
           
            <Route
              path="/search"
              element={<SearchPage searchQuery={searchQuery} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
