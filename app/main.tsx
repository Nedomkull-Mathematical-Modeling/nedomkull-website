import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./app.css";

const root = document.getElementById("root");
if (!root) throw new Error("Root element #root not found");

function computeBaseName() {
  if (import.meta.env.DEV) return "/";
  const parts = window.location.pathname.split("/").filter(Boolean);
  // If hosted under /repo/, use "/repo"; otherwise use "/" for root hosting
  return parts.length > 0 ? `/${parts[0]}` : "/";
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter basename={computeBaseName()}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
