import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

document.documentElement.classList.add("scroll-smooth");
document.body.classList.add(
  "bg-slate-50",
  "text-slate-900",
  "antialiased",
  "transition-colors",
  "duration-300",
  "dark:bg-slate-950",
  "dark:text-slate-100",
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
