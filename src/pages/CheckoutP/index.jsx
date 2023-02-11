import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ContainerCheckout, ContainerCheck } from "./styles";
import { CheckoCard } from "../../components/CheckoCard";
import { useStateValue } from "../../StateProvider";
import { TotalProduct } from "../../components/TotalProduct";

export const CheckoutP = () => {
  const [{ basket }, dispatch] = useStateValue();
  function FormRow() {
    return (
      <ContainerCheckout>
        {basket?.map((item, index) => (
          <CheckoCard key={index} product={item} />
        ))}
      </ContainerCheckout>
    );
  }
  return (
    <ContainerCheck>
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="text-center"> Shopping Card</h2>
          </Col>

          <Col xs={12} sm={8} md={9}>
            <FormRow />
          </Col>

          <Col xs={12} sm={4} md={3}>
            <TotalProduct />
          </Col>
        </Row>
      </Container>
    </ContainerCheck>
  );
};
