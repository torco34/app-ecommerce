import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useStateValue } from "../StateProvider";
import { CheckoutCard } from "../components/CheckoutCard";
import {
  ContainerCheckout,
  ContainerCheck,
} from "../assets/styled/CheckoutPages";
import { Total } from "../components/Total";

export const CheckoutPages = () => {
  const [{ basket }, dispatch] = useStateValue();
  function FormRow() {
    return (
      <ContainerCheckout>
        {basket?.map((item) => (
          <CheckoutCard key={item.id} product={item} />
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
