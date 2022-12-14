import React from "react";
import { Formik, Form, Field } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
import { Link } from "react-router-dom";
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
              Email
              <Field name="email" type="email" />
            </label>
            <label>
              Contraseña
              <Field name="password" type="password" />
            </label>
            <label>
              <Link to="/regis">Registrases</Link>
            </label>
            <button type="submit" className="btn btn-info">
              iniciar sesión
            </button>
          </Form>
        </ContainerFormik>
      </Formik>
    </>
  );
};
