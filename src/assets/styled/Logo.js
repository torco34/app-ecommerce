import styled from "styled-components";
const colors = {
  purple: "#472183",
  white: "#f5f6f7",
  blue: "#4B56D2",
  blue2: "#82C3EC",
  silver: "#F1F6F5",
  black: "#ff646f",
};
const ContaiLogo = styled.div`
  display: flex;
  flex-direction: column;
  text-shadow: 1px 1px 1px black;
  p {
    font-family: Arial, Helvetica, sans-serif;
    color: ${colors.black};
    span {
      color: ${colors.blue};
    }
  }
`;

export { ContaiLogo };
