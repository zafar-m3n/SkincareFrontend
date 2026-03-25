import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routeConfig from "./routeConfig";
import PrivateRoute from "@/components/navigation/PrivateRoute";
import PublicRoute from "@/components/navigation/PublicRoute";

const renderRouteElement = ({ element: PageComponent, layout: LayoutComponent, access = "public", roles = [] }) => {
  const pageElement = (
    <LayoutComponent>
      <PageComponent />
    </LayoutComponent>
  );

  if (access === "private") {
    return <PrivateRoute roles={roles}>{pageElement}</PrivateRoute>;
  }

  if (access === "guest") {
    return <PublicRoute restricted>{pageElement}</PublicRoute>;
  }

  return <PublicRoute restricted={false}>{pageElement}</PublicRoute>;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={renderRouteElement(route)} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
