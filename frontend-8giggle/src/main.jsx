import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextCategoryPorvider } from "./components/Contexts/CategoryFilter";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextCategoryPorvider>
      <App />
    </ContextCategoryPorvider>
  </React.StrictMode>
);
