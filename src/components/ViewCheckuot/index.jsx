import React from "react";
import accounting from "accounting";
import Button from "react-bootstrap/Button";
import { getBasketTotal } from "../../StateProvider/reducer";
import { useStateValue } from "../../StateProvider/index";
import { Link } from "react-router-dom";

export const ViewCheckuot = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log(getBasketTotal);
  return (
    <div className="text-center">
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>

      <Link to="/chekout">
        <Button variant="danger">Check out</Button>
      </Link>
    </div>
  );
};
