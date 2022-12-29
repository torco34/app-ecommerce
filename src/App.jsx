import React from "react";
import { CheckoutPages } from "./components/CheckoutPages";
import { Header } from "./components/Header";
import { Product } from "./components/Product";

import { Products } from "./components/Products";
// import "./main";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        {/* <Product /> */}
        {/* <Products /> */}
        <CheckoutPages />
      </div>
    </>
  );
}

export default App;
