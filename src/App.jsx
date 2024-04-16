import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import Cart from "./pages/cart/Cart";
import Dashboard from "./pages/admin/dashboard/Dashboard";
import NoPage from "./pages/nopage/NoPage";
import MyState from "./context/data/myState";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./components/cart/CartPage";
import AllProduct from "./pages/allproduct/AllProduct";

function App() {
  return (
    <>
      <MyState>
        <Router>
          <ScrollTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/productinfo" element={<ProductInfo />} />
            <Route path="/card" element={<CartPage />} />
            <Route path="/allproduct" element={<AllProduct />} />
          </Routes>
        </Router>
      </MyState>
    </>
  );
}

export default App;
