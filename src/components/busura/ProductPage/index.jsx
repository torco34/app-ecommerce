import React from "react";
import { Input } from "../../components/Input/Index";
import { Productos } from "../../components/Productos/index";

// import { ContainerPages } from "./style";
export const ProductPage = () => {
  return (
    <div className="container">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est ad
      culpa expedita, at unde sed quam reprehenderit voluptatum quis fugiat
      illum ut tempora inventore quos, neque, dolorem voluptatem quod!
      <br></br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit est ad
      culpa expedita, at unde sed quam reprehenderit voluptatum quis fugiat
      illum ut tempora inventore quos, neque, dolorem voluptatem quod!
      <br></br>
      <div>
        <Input />
      </div>
      <Productos />
    </div>
  );
};
