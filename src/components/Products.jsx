import React from "react";
import { Product } from "./Product";
import productsData from "../data";
import { ContainerProduct } from "../assets/styled/Products";
function Products() {
  return (
    <ContainerProduct>
      {productsData.map((product) => (
        <Product key={product.name} product={product} />
      ))}
    </ContainerProduct>
  );
}

export { Products };
