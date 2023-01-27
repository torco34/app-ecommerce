import { Switch } from "antd";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import { Nabvar } from "../components/Nabvar";

import {
  CheckoutPages,
  HomePages,
  NotFun,
  ProductsPages,
  SignInPages,
  SignUpPages,
} from "../pages";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Header />}>
            <Route exact path="*" element={<HomePages />} />
            <Route path="/prod" element={<ProductsPages />}></Route>
            <Route path="/regis" element={<SignUpPages />}></Route>
            <Route path="/sign" element={<SignInPages />}></Route>
            <Route path="/chek" element={<CheckoutPages />}></Route>
            <Route path="/" element={<NotFun />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export { AppRouter };
