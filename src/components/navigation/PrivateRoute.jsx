import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_PATHS } from "@/lib/constants";
import token from "@/lib/utilities";

const PrivateRoute = ({ children, roles = [] }) => {
  const isAuthenticated = token.isAuthenticated();
  const user = token.getUserData();
  const userRole = user?.role || null;

  if (!isAuthenticated) {
    return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
  }

  if (roles.length > 0 && !roles.includes(userRole)) {
    return <Navigate to={ROUTE_PATHS.UNAUTHORIZED} replace />;
  }

  return children;
};

export default PrivateRoute;
