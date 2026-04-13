import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/MainRoute";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider
      fallback={<h1>Loading...</h1>}
      router={router}
    ></RouterProvider>
  </StrictMode>,
);
