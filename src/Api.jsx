import React, { createContext } from "react";

import React, { createContext, useEffect, useState } from "react";
import Axios from "axios";
export const UserContext = createContext();

export const UseContextProvider = ({ children }) => {
  const [caracters, setCaracters] = useState([]);
  useEffect(() => {
    Axios.get("http://api.escuelajs.co/api/v1/products").then((response) => {
      if (response.status === 200) {
        const results = response.data;

        // console.log(results, "este es el console");
        setCaracters(results);
      }
    });
  }, []);
  return (
    <UserContext.Provider
      value={{
        nombre: "toto",
        apellido: "arias",
        caracters,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
