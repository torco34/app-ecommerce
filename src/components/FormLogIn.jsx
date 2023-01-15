import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
import { Link } from "react-router-dom";
export const FormLogIn = () => {
  const [texSend, setTexSend] = useState(false);
  return (
    <>
      <ContainerFormik>
        <h2>Inicia sesión</h2>

        <Formik
          initialValues={{
            nombre: "",
            correo: "",
          }}
          validate={(valores) => {
            let errores = {};
            // validacion name
            if (!valores.nombre) {
              errores.nombre = "No has ingresado tu nombre";
            } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.nombre)) {
              errores.nombre = "El nombre solo puede tener letras y espacio";
            }

            // validacion correo
            if (!valores.correo) {
              errores.correo = "ingrese el correo";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.correo
              )
            ) {
              errores.correo = "El correo es incorrecto";
            }
            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();

            setTexSend(true);

            setTimeout(() => setTexSend(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="form">
              <div>
                <label>Nombre</label>
                <Field type="text" id="nombre" name="nombre" />
                <ErrorMessage
                  name="nombre"
                  component={() => (
                    <div className="text-danger text-center">
                      {errors.nombre}
                    </div>
                  )}
                />
              </div>
              <div className="login__container--form">
                <label>Correo</label>
                <Field type="email" id="correo" name="correo" />
                <ErrorMessage
                  name="correo"
                  component={() => (
                    <div className="text-danger text-center">
                      {errors.correo}
                    </div>
                  )}
                />
              </div>
              {texSend && (
                <p className="text-success text-center">
                  Bienvenido a tienda onLine......
                </p>
              )}
              <button type="submit">Inicia sesión</button>
            </Form>
          )}
        </Formik>
      </ContainerFormik>
    </>
  );
};
