import styled from "styled-components";
const colors = {
  purple: "#472183",
  white: "#f5f6f7",
  blue: "#4B56D2",
  blue2: "#82C3EC",
  silver: "#F1F6F5",
  black: "#3a4750",
};
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
  background-color: ${colors.silver};
  width: 100px;
`;
export { ContainerHeader, ContainerImg };
