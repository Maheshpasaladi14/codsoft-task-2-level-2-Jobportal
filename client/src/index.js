import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import JobProvider from "./context/JobContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JobProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </JobProvider>
  </React.StrictMode>
);
