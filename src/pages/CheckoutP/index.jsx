import React from "react";
import { Container, ContainerCheck } from "./styles";
import { CheckoCard } from "../../components/CheckoCard";
import { useStateValue } from "../../StateProvider";
import { TotalProduct } from "../../components/TotalProduct";

export const CheckoutP = () => {
  const [{ basket }, dispatch] = useStateValue();
  function FormRow() {
    return (
      <Container>
        {basket?.map((item, index) => (
          <CheckoCard key={index} product={item} />
        ))}
      </Container>
    );
  }
  return (
    <div className="container">
      <ContainerCheck>
        <h1>CHECKOUP</h1>
        <h1>CHECKOUP</h1>
        <h1>CHECKOUP</h1>
        <FormRow />
        <h1>CHECKOUP</h1>
        {/* <FormRow /> */}
        <TotalProduct />
      </ContainerCheck>
    </div>
  );
};
