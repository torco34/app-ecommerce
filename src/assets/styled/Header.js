import styled from "styled-components";
// const colors = {
//   purple: "#472183",
//   white: "#f5f6f7",
//   blue: "#4B56D2",
//   blue2: "#82C3EC",
//   silver: "#F1F6F5",
//   black: "#3a4750",
// };
const ContainerHeader = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  a {
    color: #000;
  }
`;
const ContainerImg = styled.div`
  overflow: hidden;
  width: 10%;
  height: 8vh;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5%;
    object-fit: cover;
  }
`;
export { ContainerHeader, ContainerImg };
