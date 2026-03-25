import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import routeConfig from "./routeConfig";
import { ROUTE_PATHS } from "@/lib/constants";
import token from "@/lib/utilities";

const AccessControl = ({ access = "public", roles = [], children }) => {
  const isAuthenticated = token.isAuthenticated();
  const user = token.getUserData();
  const userRole = user?.role || null;

  if (access === "public") {
    return children;
  }

  if (access === "guest") {
    if (!isAuthenticated) return children;

    if (userRole === "admin") {
      return <Navigate to={ROUTE_PATHS.ADMIN_DASHBOARD} replace />;
    }

    return <Navigate to={ROUTE_PATHS.HOME} replace />;
  }

  if (access === "private") {
    if (!isAuthenticated) {
      return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
    }

    if (roles.length > 0 && !roles.includes(userRole)) {
      return <Navigate to={ROUTE_PATHS.UNAUTHORIZED} replace />;
    }

    return children;
  }

  return children;
};

const renderRouteElement = ({ element: PageComponent, layout: LayoutComponent, access, roles }) => {
  return (
    <AccessControl access={access} roles={roles}>
      <LayoutComponent>
        <PageComponent />
      </LayoutComponent>
    </AccessControl>
  );
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
