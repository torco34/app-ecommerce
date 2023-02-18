import styled from "styled-components";

export const ContainerFather = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  right: 0px;
  width: 100%;
  z-index: 1;
`;
export const ConatinerNav = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin-left: 20px;

  a {
    text-decoration: none;
    margin-left: 20px;
  }
`;

export const CardOnLina = styled.div`
  position: fixed;
  z-index: 1;
  margin-top: 80px;
  left: 83%;
  width: 50px;
  display: flex;
  align-items: center;

  @media (min-width: 1078px) {
    a {
      position: relative;
      width: 100px;
      left: 120px;
      top: -70px;
    }
  }
`;
export const BadgeCont = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
`;
export const Bs = styled.div`
  background-color: #f1f1f1;
  padding: 0px;
  border-radius: 10px;
  width: 100%;
  text-align: center;
`;
