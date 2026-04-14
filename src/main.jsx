import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/MainRoute";
import AllDataProvider from "./context/AllDataProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllDataProvider>
      <RouterProvider
        fallback={<h1>Loading...</h1>}
        router={router}
      ></RouterProvider>
      <ToastContainer />
    </AllDataProvider>
  </StrictMode>,
);
