import React from "react";
import { Formik, Form, Field } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
export const FormLogIn = () => {
  const publica = (value) => {
    console.log(value);
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={publica}
      >
        <ContainerFormik>
          <Form className="form">
            <label>
              Nombre
              <Field name="name" type="text" />
            </label>
            <label>
              Email
              <Field name="email" type="email" />
            </label>
            <label>
              Contrasena
              <Field name="password" type="password" />
            </label>
            <button type="su">Registrase</button>
          </Form>
        </ContainerFormik>
      </Formik>
    </>
  );
};
