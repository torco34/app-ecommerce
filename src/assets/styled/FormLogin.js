import styled from "styled-components";

const ContainerFormik = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  flex-direction: column;
  width: 100%;
  /* background-color: #eeeeee; */

  .form {
    border: 1px solid silver;
    margin-bottom: 20px;
    border-radius: 6px;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    margin: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background-color: #ffff;
    justify-content: space-around;
    min-height: 500px;
    padding: 60px 68px 40px;
    width: 450px;
    /* background-image: linear-gradient(#21c08b, #8f57fd); */
    /* background-image: linear-gradient(#2b3a55, #ce7777); */
    background-image: linear-gradient(#2b3a55, #e8c4c4);
  }
  label,
  a {
    color: white;
    text-decoration: none;
  }
  input {
    background-color: transparent;
    border: 2px solid white;
    border-left: 0px;
    border-right: 0px;
    border-top: 0px;
    color: white;
    font-family: "Muli", sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
    outline: none;
    width: 100%;
  }

  button {
    background-color: rgba(255, 255, 255, 0.3);
    border: none;
    border-radius: 25px;
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
export { ContainerFormik };
