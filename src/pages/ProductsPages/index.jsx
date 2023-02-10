import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import productsData from "../../archivosGlobal/data";
import { ContainerProduct } from "./styles";
import { Input } from "../../components/Input/Index";

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
              <ProductCard key={todo.id} todo={todo} />
            ))}
      </ContainerProduct>
    </div>
  );
}

export { ProductsPages };
