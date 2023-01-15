import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { ContainerFormik } from "../assets/styled/FormLogin";
import { Link } from "react-router-dom";
export const FormLogIn = () => {
  const [texSend, setTexSend] = useState(false);
  return (
    <>
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
            errores.nombre = "Porfavor ingresa un nombre";
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
          <Form>
            <div className="">
              <label>nombre</label>
              <Field
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Nombre"
              />
              <ErrorMessage
                name="nombre"
                component={() => (
                  <div className="text-oragen">{errors.nombre}</div>
                )}
              />
            </div>
            <div className="login__container--form">
              <label>correo</label>
              <Field type="email" id="correo" name="correo" />
              <ErrorMessage
                name="correo"
                component={() => <div className="">{errors.correo}</div>}
              />
            </div>
            <button type="submit"> Enviar</button>
            {texSend && <p>Formularia enviado con exito</p>}
          </Form>
        )}
      </Formik>
    </>
  );
};
