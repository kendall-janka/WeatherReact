import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <div className="container">
    <StrictMode>
      <App defaultcity="New York" />
    </StrictMode>
  </div>
);
