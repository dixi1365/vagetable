import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import FreshVegetable from "./Pages/FreshVegetable";
import Productdetails from "./Pages/Productdetails";
import Cart from "./Pages/Cart";

function App() {
  return (
    <Router>
     

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FreshVegetable" element={<FreshVegetable />} />
        <Route path="Productdetails" element={<Productdetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
