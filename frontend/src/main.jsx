import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./pages/App.jsx";

import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* The main web application */}
    <App />
  </StrictMode>
);
