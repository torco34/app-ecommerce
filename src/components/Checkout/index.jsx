import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { ContainerLogin, Forms } from "./styles";

export const Checkout = () => {
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
      <h2>Shipping card</h2>

      <Formik
        initialValues={{
          nombre: "",
          correo: "",
          password: "",
          apellidos: "",
          direction1: "",
          direction2: "",
          pais: "",
          codigo: "",
          region: "",
          ciudad: "",
        }}
        validate={(valores) => {
          let errores = {};

          // validación nombre

          if (!valores.nombre) {
            errores.nombre = "ingrese el nombre";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre es incorrecto";
          }
          // validación apellidos
          if (!valores.apellidos) {
            errores.apellidos = "ingrese el apellidos";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.apellidos)) {
            errores.apellidos = "El apellido es incorrecto";
          }

          // directio
          if (!valores.direction1) {
            errores.direction1 = "ingrese el tu direccion";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.direction1)) {
            errores.direction1 = "El direction es valida";
          }
          // direcion2

          if (!valores.direction2) {
            errores.direction2 = "ingrese el tu direccion";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.direction2)) {
            errores.direction2 = "El direction es valida";
          }

          // pais
          if (`${valores.país}`.length < 5) {
            errores.pais = "Ingrese tu pais";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.país)) {
            errores.pais = "Contrasena el pais no existe";
          }
          //   codigo
          if (!valores.codigo) {
            errores.codigo = "ingrese el codigo postal";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.codigo)) {
            errores.codigo = "El no has engresado el codigo";
          }
          // region
          if (!valores.region) {
            errores.region = "ingrese tu region";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.codigo)) {
            errores.region = "La region no valida";
          }
          // ciudad
          if (!valores.ciudad) {
            errores.ciudad = "ingrese tu ciudad";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.ciudad)) {
            errores.ciudad = "La region no es valida";
          }
          // pais

          if (!valores.pais) {
            errores.pais = "ingrese tu pais";
          } else if (!/^[a-zA-ZA-y\s]{1,40}$/.test(valores.pais)) {
            errores.pais = "El pais no es valida";
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
              <ErrorMessage
                name="nombre"
                component={() => (
                  <div className="text-danger text-center">{errors.nombre}</div>
                )}
              />
              <label>Nombre</label>

              <Field type="text" id="nombre" name="nombre" />
            </div>

            <div className="login__container--form">
              <ErrorMessage
                name="apellidos"
                component={() => (
                  <div className="text-danger text-center t-5">
                    {errors.apellidos}
                  </div>
                )}
              />
              <label>Apellido</label>
              <Field type="text" id="apellidos" name="apellidos" />
            </div>

            <div className="login__container--form">
              <ErrorMessage
                name="direction1"
                component={() => (
                  <div className="text-danger text-center">
                    {errors.direction1}
                  </div>
                )}
              />
              <label>Direccio 1</label>
              <Field type="text" id="direction1" name="direction1" />
            </div>
            <div className="login__container--form">
              <ErrorMessage
                name="direction2"
                component={() => (
                  <div className="text-danger text-center">
                    {errors.direction2}
                  </div>
                )}
              />
              <label>Direccion 2</label>
              <Field type="text" id="direction2" name="direction2" />
            </div>
            <div className="login__container--form">
              <ErrorMessage
                name="ciudad"
                component={() => (
                  <div className="text-danger text-center">{errors.ciudad}</div>
                )}
              />
              <label>Ciudad</label>
              <Field type="text" id="ciudad" name="ciudad" />
            </div>
            <div className="login__container--form">
              <ErrorMessage
                name="region"
                component={() => (
                  <div className="text-danger text-center">{errors.region}</div>
                )}
              />
              <label>Estado/provincia/Region</label>
              <Field type="text" id="region" name="region" />
            </div>
            <div className="login__container--form">
              <ErrorMessage
                name="codigo"
                component={() => (
                  <div className="text-danger text-center">{errors.codigo}</div>
                )}
              />
              <label>Codigo postal</label>
              <Field type="text" id="codigo" name="codigo" />
            </div>

            <div className="login__container--form">
              <ErrorMessage
                name="pais"
                component={() => (
                  <div className="text-danger text-center">{errors.pais}</div>
                )}
              />
              <label>Pais</label>
              <Field type="text" id="pais" name="pais" />
            </div>
            {texSend && (
              <p className="text-success text-center">
                Bienvenido a tienda onLine......
              </p>
            )}

            <Link to="/view">
              <button type="submit" className="btn btn-danger">
                Next
              </button>
              {/* <p onClick={handleOnclick}>Registrarse</p> */}
            </Link>
          </Forms>
        )}
      </Formik>
    </ContainerLogin>
  );
};
