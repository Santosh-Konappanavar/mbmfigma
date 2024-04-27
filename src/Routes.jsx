import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import VijayDashboardpage from "./pages/VijayDashboardpage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "vijaydashboardpage",
      element: <VijayDashboardpage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
