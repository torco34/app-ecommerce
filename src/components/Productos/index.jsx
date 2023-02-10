import React from "react";
import { useState } from "react";
import { ProductCard } from "../ProductCard/index";
import Products from "../../archivosGlobal/data";
import { ContainerProduct } from "./styles";
import { Input } from "../Input/Index";
export const Productos = () => {
  const [data, setData] = useState(Products);
  return (
    <div className="container">
      <Input />
      <ContainerProduct>
        {!data
          ? "Cargando..."
          : data.map((todo, index) => (
              <ProductCard key={todo.id} todo={todo} />
            ))}
      </ContainerProduct>
    </div>
  );
};
