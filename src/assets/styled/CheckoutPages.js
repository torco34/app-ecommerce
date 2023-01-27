import styled from "styled-components";

const ContainerCheckout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  gap: 20px;
`;
const ContainerCheck = styled.div`
  height: 100vh;
  margin-top: 35px;
  h2 {
    font-family: Arial, Helvetica, sans-serif;
    color: #ce7777;
  }
`;
export { ContainerCheckout, ContainerCheck };
