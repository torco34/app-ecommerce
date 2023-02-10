import React from "react";
import Card from "react-bootstrap/Card";
import accounting from "accounting";
import { BsStar, BsTrash } from "react-icons/bs";
import { actionTypes } from "../../StateProvider/reducer";
import { useStateValue } from "../../StateProvider/index";

export const CheckoCard = ({ product: { id, name, image, price, rating } }) => {
  const [{ basket }, dispatch] = useStateValue();
  const remuveItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });
  };
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>
          {name}
          {accounting.formatMoney(price, "€")}
        </Card.Title>
        <Card.Text></Card.Text>
        <BsTrash size="35px" onClick={remuveItem} />
        {Array(rating)
          .fill()
          .map((_, i) => (
            <BsStar size="26px" />
          ))}
      </Card.Body>
    </Card>
  );
};
