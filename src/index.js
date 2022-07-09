import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/app";
import { ErrorContextProvider } from "./contexts/error-context";
import { UserContextProvider } from "./contexts/user-context";
import { SidebarContextProvider } from "./contexts/sidebar-context";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <IconContext.Provider value={{ className: "align-middle" }}>
    <ErrorContextProvider>
      <UserContextProvider>
        <SidebarContextProvider>
          <App />
        </SidebarContextProvider>
      </UserContextProvider>
    </ErrorContextProvider>
  </IconContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
