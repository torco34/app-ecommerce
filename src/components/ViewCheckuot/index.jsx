import React from "react";
import accounting from "accounting";
import Button from "react-bootstrap/Button";
import { getBasketTotal } from "../../StateProvider/reducer";
import { useStateValue } from "../../StateProvider/index";
import { Link } from "react-router-dom";
import { ContainerView } from "./styles";
export const ViewCheckuot = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <ContainerView>
      <h2>Todo los pedidos</h2>
      <div>
        <h5>Total items: {basket?.length}</h5>
        <h5>{accounting.formatMoney(getBasketTotal(basket), "€")}</h5>

        <Link to="/">
          <Button variant="danger">Check out</Button>
        </Link>
      </div>
      <div>
        <h2></h2>
        <p></p>
      </div>
    </ContainerView>
  );
};
