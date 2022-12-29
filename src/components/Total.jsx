import React from "react";
import accounting from "accounting";
import Button from "react-bootstrap/Button";
import { ContainerTotal } from "../assets/styled/Total";
export const Total = () => {
  return (
    <ContainerTotal>
      <h5>Total items: 3</h5>
      <h5>{accounting.formatMoney(50, "€")}</h5>
      <Button variant="danger">Check out</Button>{" "}
    </ContainerTotal>
  );
};
