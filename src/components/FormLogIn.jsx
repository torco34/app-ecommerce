import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
import { Link } from "react-router-dom";
export const FormLogIn = () => {
  return (
    <>
      <Formik
        initialValue={{
          name: "",
          email: "",
        }}
        validate={(valores) => {
          let errores = {};
          if (!errores.name) {
            errores.name = "Porfavor ingresa un nombre";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.name)) {
            errores.name = "El nombre solo puede tener letras y espacio";
          }

          // validacion correo
          if (!errores.email) {
            errores.email = "Porfavor ingresa un nombre";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errores.email = "El nombre solo puede tener letras y espacio";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          console.log("fout");
          setFomEnvia(true);

          setTimeout(() => setFomEnvia(false), 5000);
        }}
      >
        {({ errors }) => (
          <ContainerFormik>
            <Form className="form ">
              <label>nombre</label>
              <Field type="text" id="name" name="name" placeholder="Nombre" />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="text-oragen">{errors.name}</div>
                )}
              />

              <label>Correo</label>
              <Field type="text" id="email" name="email" placeholder="@" />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-oragen">{errors.email}</div>
                )}
              />

              <button type="submit"> Enviar</button>
              {/* {formEnvia && <p>Formularia enviado con exito</p>} */}
            </Form>
          </ContainerFormik>
        )}
      </Formik>
    </>
  );
};
