import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
import { Link, useHistory } from "react-router-dom";
export const FormLogIn = () => {
  const [texSend, setTexSend] = useState(false);
  return (
    <>
      <ContainerFormik>
        <h2>Inicia sesión</h2>

        <Formik
          initialValues={{
            // nombre: "",
            correo: "",
            password: "",
          }}
          validate={(valores) => {
            let errores = {};

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
            // registro
            if (`${valores.password}`.length < 5) {
              errores.password = "Ingrese contrasena";
            } else if (`${valores.password}`.length < 2) {
              errores.password = "Contrasena incorrect";
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
              <div className="login__container--form">
                <label>Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="text-danger text-center">
                      {errors.password}
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
              <Link to="/regis">
                <p>Registrarse</p>
              </Link>
            </Form>
          )}
        </Formik>
      </ContainerFormik>
    </>
  );
};
