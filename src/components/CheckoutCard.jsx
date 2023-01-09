import React from "react";
import { StarOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import accounting from "accounting";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
const { Meta } = Card;

function CheckoutCard({ product: { id, title, images, price, rating } }) {
  const [{ basket }, dispatch] = useStateValue();
  const remuveItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id: id,
    });
  };
  return (
    <div className="container">
      <Card
        style={{ width: "300px", height: "100%" }}
        cover={<img alt="example" src={images} />}
        actions={[
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
          <DeleteOutlined
            style={{
              fontSize: "20px",
              color: "#6f6767",
            }}
            onClick={remuveItem}
          />,
        ]}
      >
        <Meta title={title} />
        {accounting.formatMoney(price, "€")}
      </Card>
    </div>
  );
}

export { CheckoutCard };
