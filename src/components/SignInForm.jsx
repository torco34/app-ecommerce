import React from "react";
import { Formik, Form, Field } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
import { Link } from "react-router-dom";
export const SignInForm = () => {
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
              * Nombre
              <Field name="name" type="text" />
            </label>
            <label>
              * Apellidos
              <Field name="name" type="text" />
            </label>
            <label>
              * Email
              <Field name="email" type="email" />
            </label>
            <label>
              * Contraseña
              <Field name="password" type="password" />
            </label>
            <label>
              * confirmar Contraseña
              <Field name="password" type="password" />
            </label>
            <label>* Campos obligatorios.</label>
            <button type="submit" className="btn btn-info">
              Crear Perfil
            </button>
          </Form>
        </ContainerFormik>
      </Formik>
    </>
  );
};
