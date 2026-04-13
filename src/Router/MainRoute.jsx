import { createBrowserRouter } from "react-router";
import MainLayout from "../mainLayout/MainLayout";
import HomePage from "../pages/home/HomePage";
import ErrorPage from "../pages/Error/ErrorPage";
import TimeLIne from "../pages/TimeLine/TimeLIne";
import StatsPage from "../pages/stats/StatsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "timeline",
        Component: TimeLIne,
      },
      {
        path: "stats",
        Component: StatsPage,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
