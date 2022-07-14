import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app";
import { ErrorContextProvider } from "./contexts/error-context";
import { UserContextProvider } from "./contexts/user-context";
import { SidebarContextProvider } from "./contexts/sidebar-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ErrorContextProvider>
    <UserContextProvider>
      <SidebarContextProvider>
        <App />
      </SidebarContextProvider>
    </UserContextProvider>
  </ErrorContextProvider>
);
