import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ContainerLogin, Forms } from "./styles";

export const LogIn = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [stateCurrent, setCurrentState] = useState(0);
  const [texSend, setTexSend] = useState(false);

  const naveget = useNavigate();
  // FIREBASE

  async function handleOnclick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);
    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }
  
  return (
    <ContainerLogin>
      <h2>Inicia sesión</h2>

      <Formik
        initialValues={{
          // nombre: "",
          correo: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          // console.log(valores);
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
          naveget("/prod");
          setTexSend(true);

          setTimeout(() => setTexSend(false), 5000);
        }}
      >
        {({ errors }) => (
          <Forms className="form">
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
              <p className="text-success text-center">
                Bienvenido a tienda onLine......
              </p>
            )}
            <button type="submit">Inicia sesión</button>
            <Link to="/sig">
              <p onClick={handleOnclick}>Registrarse</p>
            </Link>
          </Forms>
        )}
      </Formik>
    </ContainerLogin>
  );
};
