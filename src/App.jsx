import { useState } from "react";
import { Header } from "./components/Header";
import { Product } from "./components/Product";
import "./main";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Product />
      </div>
    </>
  );
}

export default App;
