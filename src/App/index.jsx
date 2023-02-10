import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/index";
import { CheckoutP } from "../pages/CheckoutP";

import { HomePages } from "../pages/HomePages";
import { NotFun } from "../pages/NotFun";

import { ProductsPages } from "../pages/ProductsPages";
import { SiginPages } from "../pages/SiginPages";
import { SigUpPages } from "../pages/SigUpPages";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />}>
          <Route exact path="*" element={<HomePages />} />
          <Route exact path="/product" element={<ProductsPages />} />
          <Route path="/login" element={<SiginPages />}></Route>
          <Route path="/sig" element={<SigUpPages />}></Route>
          <Route path="/chek" element={<CheckoutP />}></Route>
          <Route path="/" element={<NotFun />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
