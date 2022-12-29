import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CheckoutPages } from "./components/CheckoutPages";
import { Header } from "./components/Header";
import { Product } from "./components/Product";

import { Products } from "./components/Products";
// import "./main";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />}></Route>
          <Route path="/chek" element={<CheckoutPages />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
