import React from "react";

import { ContainerPages } from "../assets/styled/SignUpPages";
import { Link } from "react-router-dom";
import { SagnUp } from "../components/SagnUp";
export const SignUpPages = () => {
  return (
    <>
      <ContainerPages>
        <h1>Account Registre</h1>
        <SagnUp />
      </ContainerPages>
    </>
  );
};
