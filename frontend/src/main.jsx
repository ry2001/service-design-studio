import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "./components/header";
import App from "./pages/App.jsx";

import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* If you want to put anything that will be displayed on every page */}
    <Header />
    {/* The main web application */}
    <App />
  </StrictMode>
);
