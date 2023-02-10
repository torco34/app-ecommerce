import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { StateProvider } from "./StateProvider/index";
import reducer, { initialState } from "./StateProvider/reducer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
