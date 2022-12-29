import styled from "styled-components";

const ContainerCheckout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 20px;
`;
const ContainerCheck = styled.div`
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: #000;
  }
`;
export { ContainerCheckout, ContainerCheck };
