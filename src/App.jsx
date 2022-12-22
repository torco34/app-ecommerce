import { useState } from "react";
import { Header } from "./components/Header";
import { Product } from "./components/Product";

import { Products } from "./components/Products";
import "./main";
function App() {
  return (
    <>
      <Header />
      <div className="container">{/* <Product /> */}</div>
      <Products />
    </>
  );
}

export default App;
