import React from "react";
// import { Formik } from "../components/Formik";
import { FormLogIn } from "../components/FormLogIn";
import { ContainerSignin } from "../assets/styled/SignIn";

export const SignInPages = () => {
  return (
    <ContainerSignin>
      <FormLogIn />
    </ContainerSignin>
  );
};
