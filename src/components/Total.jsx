import React from "react";
import accounting from "accounting";
import Button from "react-bootstrap/Button";
import { ContainerTotal } from "../assets/styled/Total";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
console.log(getBasketTotal);
export const Total = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(getBasketTotal);
  return (
    <ContainerTotal>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(), "€")}</h5>
      <Button variant="danger">Check out</Button>{" "}
    </ContainerTotal>
  );
};
