import React from "react";
import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";
import Books from "./pages/Books";
import Layout from "./Layout";
import ShoppingCart from "./pages/ShoppingCart";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate  to="/books"/>}/>
      <Route path="/" element={<Layout />}>
        <Route path="/books" element={<Books />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
};

export default App;
