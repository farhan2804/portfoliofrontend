import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "./components/Themes/ThemeProvider.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.querySelector(".root");
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
