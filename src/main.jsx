import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/MainRoute";
import AllDataProvider from "./context/allDataProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllDataProvider>
      <RouterProvider
        fallback={<h1>Loading...</h1>}
        router={router}
      ></RouterProvider>
    </AllDataProvider>
  </StrictMode>,
);
