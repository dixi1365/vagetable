import React from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Pages/Home";
import FreshVegetable from "./Pages/FreshVegetable";
import Productdetails from "./Pages/Productdetails";
import Cart from "./Pages/Cart";
import Myaccount from "./Pages/Myaccount";
import Wishlist from "./Pages/Wishlist";
import Address from "./Pages/Address";
import LagalNotic from "./Pages/LagalNotic";
import Helpcenter from "./Pages/Helpcenter";
import Changepassword from "./Pages/Changepassword";
import Policy from "./Pages/Policy";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FreshVegetable" element={<FreshVegetable />} />
        <Route path="Productdetails" element={<Productdetails />} />
        <Route path="cart" element={<Cart />} />
        <Route path="Myaccount" element={<Myaccount />} />
        <Route path="/My-account/wishlist" element={<Wishlist />} />
        <Route path="/My-account/address" element={<Address />} />
        <Route path="/My-account/legal-notice" element={<LagalNotic />} />
        <Route path="/My-account/help-center" element={<Helpcenter />} />
        <Route path="/policy" element={<Policy />} />
        <Route
          path="/My-account/change-password"
          element={<Changepassword />}
        />
      </Routes>
    </Router>
  );
}

export default App;
