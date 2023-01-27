import React from "react";
import { AppRouter } from "./router/AppRoute";
import { ContainerApp } from "./assets/styled/App";
function App() {
  return (
    <>
      <ContainerApp>
        <AppRouter />
      </ContainerApp>
    </>
  );
}

export default App;
