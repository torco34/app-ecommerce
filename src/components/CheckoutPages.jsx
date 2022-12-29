import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import productsData from "../data";
import { Product } from "./Product";
import { CheckoutCard } from "./CheckoutCard";
import {
  ContainerCheckout,
  ContainerCheck,
} from "../assets/styled/CheckoutPages";
import { Total } from "./Total";

export const CheckoutPages = () => {
  function FormRow() {
    return (
      <ContainerCheckout>
        {productsData.map((product) => (
          <CheckoutCard key={product.name} product={product} />
        ))}
      </ContainerCheckout>
    );
  }
  return (
    <ContainerCheck>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center text-info"> Shopping Card</h2>
          </Col>

          <Col xs={12} sm={8} md={9}>
            <FormRow />
          </Col>

          <Col xs={12} sm={4} md={3}>
            <Total />
          </Col>
        </Row>
      </Container>
    </ContainerCheck>
  );
};
