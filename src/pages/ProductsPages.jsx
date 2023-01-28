import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import productsData from "../data";
import { ContainerProduct } from "../assets/styled/Products";
import { Input } from "../components/Input";

function ProductsPages() {
  // const URL = "http://api.escuelajs.co/api/v1/products";
  const [todos, setTodos] = useState(productsData);
  const [search, setSearch] = useState("");
  // const fetchApi = async () => {
  //   const respond = await fetch(URL);
  //   const respondJSON = await respond.json();
  //   setTodos(respondJSON);
  // };
  // useEffect(() => {
  //   fetchApi();
  // }, []);
  let searchTodo = [];

  if (!search.length >= 1) {
    searchTodo = todos;
  } else {
    searchTodo = todos.filter((todo) => {
      const todoText = todo.name.toLowerCase();
      const searchText = search.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  return (
    <div className="container">
      <br />
      <br />
      <div>
        <Input search={search} setSearch={setSearch} />
      </div>
      <br />
      <br />

      <ContainerProduct>
        {!todos
          ? "Cargando..."
          : searchTodo.map((todo, index) => (
              <Product key={todo.id} todo={todo} />
            ))}
      </ContainerProduct>
    </div>
  );
}

export { ProductsPages };
