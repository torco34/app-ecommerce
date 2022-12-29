import React from "react";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import accounting from "accounting";

const { Meta } = Card;

function Product({
  product: { index, id, name, image, price, rating, description },
}) {
  return (
    <div className="container">
      <Card
        style={{ width: "300px" }}
        cover={<img alt="example" src={image} />}
        actions={[
          <ShoppingCartOutlined
            style={{
              fontSize: "30px",
              color: "#090902",
            }}
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
        <Meta title={name} description={description} />
        {accounting.formatMoney(price, "€")}
      </Card>
    </div>
  );
}

export { Product };
