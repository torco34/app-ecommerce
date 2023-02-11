import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Checkout } from "../components/Checkout";
import { Header } from "../components/Header/index";
import { ViewCheckuot } from "../components/ViewCheckuot";
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
          <Route path="/login" element={<SiginPages />} />
          <Route path="/sig" element={<SigUpPages />} />
          <Route path="/chek" element={<CheckoutP />} />
          <Route path="/chekout" element={<Checkout />} />
          <Route path="/view" element={<ViewCheckuot />} />
          <Route path="/" element={<NotFun />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
