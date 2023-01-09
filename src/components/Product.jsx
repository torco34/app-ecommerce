import React from "react";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import accounting from "accounting";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { ContainerProduct } from "../assets/styled/Product";

const { Meta } = Card;

function Product({ todo: { id, title, images, price, rating, description } }) {
  const [{ basket }, dispatch] = useStateValue();

  const addCard = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: { id, name, images, price, rating, description },
    });
  };
  return (
    <ContainerProduct>
      <Card
        style={{ width: "300px" }}
        cover={<img alt="example" src={images} />}
        actions={[
          <ShoppingCartOutlined
            style={{
              fontSize: "30px",
              color: "#090902",
            }}
            onClick={addCard}
          />,
          <Meta
            avatar={Array(rating)
              .fill()
              .map((_, i) => (
                <StarOutlined
                  key={i}
                  style={{
                    fontSize: "25px",
                    color: "#ebdd1f",
                  }}
                />
              ))}
          />,
        ]}
      >
        <Meta title={title} description={description} />
        {accounting.formatMoney(price, "€")}
      </Card>
    </ContainerProduct>
  );
}

export { Product };
