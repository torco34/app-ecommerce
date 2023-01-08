import styled from "styled-components";
const colors = {
  purple: "#472183",
  white: "#f5f6f7",
  blue: "#4B56D2",
  blue2: "#82C3EC",
  silver: "#F1F6F5",
  black: "#3a4750",
};
const ContainerThader = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
`;
const ContainerHeader = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  a {
    text-decoration: none;
    margin-left: 20px;
  }
  p {
    font-family: Arial, Helvetica, sans-serif;
    color: ${colors.blue};
    span {
      color: ${colors.blue};
    }
  }
`;
const ContainerImg = styled.div`
  overflow: hidden;
  width: 100px;
`;

const Carshoop = styled.div`
  position: relative;
  left: 0px;

  @media (min-width: 778px) {
    button {
      position: absolute;
      top: -7px;
      right: 0px;

      z-index: 1;
    }
  }

  button {
    position: fixed;

    right: 20px;
    z-index: 1;
  }
`;
export { ContainerThader, ContainerHeader, ContainerImg, Carshoop };
