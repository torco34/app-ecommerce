import React from "react";
import { StarOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

function Product() {
  return (
    <Card
      style={{ width: 300 }}
      cover={
        <img
          alt="example"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMaVEdtqw-QuF73S3POsLjmw2G4DBiMVc7uw&usqp=CAU"
        />
      }
      actions={[
        <ShoppingCartOutlined
          style={{
            fontSize: "30px",
            color: "#090902",
          }}
        />,
        <Meta
          avatar={Array(4)
            .fill()
            .map((_, i) => (
              <StarOutlined
                style={{
                  fontSize: "25px",
                  color: "#ebdd1f",
                }}
              />
            ))}
        />,
      ]}
    >
      <Meta title="Zapatos Depotivo" description="This is the description" />
    </Card>
  );
}

export { Product };
