import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserStore from "./store/UserStore";
import CompanyStore from "./store/CompanyStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider
    value={{
      user: new UserStore(),
      company: new CompanyStore(),
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
