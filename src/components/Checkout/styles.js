import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  flex-direction: column;
  /* width: 100%; */
  height: 100vh;
`;

export const Forms = styled.form`
  width: 50%;

  label,
  a {
    color: #c2c2c2;
    text-decoration: none;
  }

  input {
    background-color: transparent;
    border: 2px solid #c1c1c1;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    color: #c1c1c1;
    font-family: "Muli", sans-serif;
    font-size: 16px;
    margin-bottom: 2px;
    outline: none;
    width: 100%;
  }

  button {
    /* background-color: rgba(255, 255, 255, 0.3); */
    border: none;
    /* border-radius: 25px; */
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    font-family: "Muli", sans-serif;
    height: 50px;
    letter-spacing: 1px;
    margin: 10px 0px;
  }
  ::placeholder {
    color: white;
  }
`;
