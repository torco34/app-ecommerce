import React from "react";
import accounting from "accounting";
import Button from "react-bootstrap/Button";

import { getBasketTotal } from "../../StateProvider/reducer";
import { useStateValue } from "../../StateProvider/index";
// console.log(getBasketTotal);
export const TotalProduct = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(getBasketTotal);
  return (
    <>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>
      <Button variant="danger">Check out</Button>{" "}
    </>
  );
};
