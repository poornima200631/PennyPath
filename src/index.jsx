import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "./components/App";
import ReactDOM from 'react-dom/client'
import React from 'react'
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

