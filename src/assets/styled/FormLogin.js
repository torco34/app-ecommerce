import styled from "styled-components";

const ContainerFormik = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  flex-direction: column;

  .form {
    border: 1px solid silver;
    margin-bottom: 20px;
    border-radius: 6px;
    padding: 20px;
    height: 50vh;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }
  label,
  input {
    display: block;
  }
  label,
  button {
    margin-top: 1rem;
  }
`;
export { ContainerFormik };
