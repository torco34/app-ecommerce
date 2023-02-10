import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { Link, useNavigate } from "react-router-dom";
import { getApp } from "firebase/app";
// console.log(getApp);
export const SagnUp = () => {
  const [texSend, setTexSend] = useState(false);
  const navegat = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          // console.log(valores);
          // validacion name
          if (!valores.nombre) {
            errores.nombre = "Ingresado tu nombre";
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
          // pasowerd
          if (`${valores.password}`.length < 5) {
            errores.password = "Escribe la contraseña";
          } else if (`${valores.password}`.length < 2) {
            errores.password = "La contrasena es incorrecta";
          }
          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();

          // getApp(valores)
          //   .then((getApp) => {
          //     // console.log(getApp);
          //     if (getApp) {
          //       navegat("/prod");
          //     }
          //   })
          //   .catch((err) => alert(err.message));
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
                  <div className="text-danger text-center">{errors.nombre}</div>
                )}
              />
            </div>
            <div className="login__container--form">
              <label>Correo</label>
              <Field type="email" id="correo" name="correo" />
              <ErrorMessage
                name="correo"
                component={() => (
                  <div className="text-danger text-center">{errors.correo}</div>
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
              <p className="text-success text-center">Ya quedo registrado</p>
            )}
            <button type="submit">Registrarse</button>
            <Link to="/login">
              <p>Iniciar sesion</p>
            </Link>
          </Form>
        )}
      </Formik>
    </>
  );
};
