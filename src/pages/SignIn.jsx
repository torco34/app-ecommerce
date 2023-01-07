import React from "react";
// import { Formik } from "../components/Formik";
import { FormLogIn } from "../components/FormLogIn";
import { ContainerSignin } from "../assets/styled/SignIn";
import { PinturePublic } from "../components/PinturePublic";

export const SignIn = () => {
  return (
    <ContainerSignin>
      <FormLogIn />
      {/* <FormLogIn />
      <PinturePublic /> */}
    </ContainerSignin>
  );
};
