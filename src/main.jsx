import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import App from "./App";
import "./index.css";

import { ThemeProvider }
from "/src/Context/ThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ThemeProvider>
       <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);