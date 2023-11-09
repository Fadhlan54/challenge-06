import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cars from "./pages/cars";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/cars",
    element: <Cars />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
