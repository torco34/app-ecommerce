import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import productsData from "../data";
import { ContainerProduct } from "../assets/styled/Products";

function ProductsPages() {
  const [data, setData] = useState(productsData);
  const URL = "http://api.escuelajs.co/api/v1/products";
  const [todos, setTodos] = useState();
  const fetchApi = async () => {
    const respond = await fetch(URL);
    const respondJSON = await respond.json();
    setTodos(respondJSON);
    console.log(respond);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="container">
      <ContainerProduct>
        {!todos
          ? "cargando.."
          : todos.map((todo, index) => <Product key={todo.id} todo={todo} />)}
      </ContainerProduct>
    </div>
  );
}

export { ProductsPages };
