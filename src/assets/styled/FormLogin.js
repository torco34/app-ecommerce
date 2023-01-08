import styled from "styled-components";

const ContainerFormik = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  flex-direction: column;
  background-color: #eeeeee;

  .form {
    border: 1px solid silver;
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 20px;
    /* width: 30%; */
    margin: auto;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background-color: #ffff;
  }
  label,
  input {
    display: block;
    width: 100%;
  }
  label,
  button {
    margin-top: 1rem;
  }
`;
export { ContainerFormik };
