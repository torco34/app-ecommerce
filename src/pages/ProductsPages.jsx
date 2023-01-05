import React from "react";
import { Product } from "../components/Product";
import productsData from "../data";
import { ContainerProduct } from "../assets/styled/Products";
function ProductsPages() {
  return (
    <div className="container">
      <ContainerProduct>
        {productsData.map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </ContainerProduct>
    </div>
  );
}

export { ProductsPages };
