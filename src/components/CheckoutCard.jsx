import React from "react";
import { StarOutlined, DeleteOutlined } from "@ant-design/icons";
import { Card } from "antd";
import accounting from "accounting";

const { Meta } = Card;

function CheckoutCard({ product: { id, name, image, price, rating } }) {
  return (
    <div className="container">
      <Card
        style={{ width: "300px", padding: "13px" }}
        cover={<img alt="example" src={image} />}
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
              fontSize: "30px",
              color: "#090902",
            }}
          />,
        ]}
      >
        <Meta title={name} />
        {accounting.formatMoney(price, "€")}
      </Card>
    </div>
  );
}

export { CheckoutCard };
