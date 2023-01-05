import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header";
import {
  CheckoutPages,
  HomePages,
  NotFun,
  ProductsPages,
  SignIn,
  SignUp,
} from "../pages";

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Header />}>
            {/* <Route path="/produc" element={<HomePages />} /> */}
            <Route path="/prod" element={<ProductsPages />} />
            <Route path="sign" element={<SignUp />} />
            <Route path="siup" element={<SignIn />} />
            <Route path="chek" element={<CheckoutPages />} />
            <Route path="*" element={<NotFun />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export { AppRouter };
