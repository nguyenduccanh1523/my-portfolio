import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./context/i18n";
import App from "./App.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
