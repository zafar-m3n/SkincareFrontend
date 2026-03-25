import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTE_PATHS, USER_ROLES } from "@/lib/constants";
import token from "@/lib/utilities";

const PublicRoute = ({ children, restricted = false }) => {
  const isAuthenticated = token.isAuthenticated();
  const user = token.getUserData();
  const userRole = user?.role || null;

  if (!restricted) {
    return children;
  }

  if (!isAuthenticated) {
    return children;
  }

  if (userRole === USER_ROLES.ADMIN) {
    return <Navigate to={ROUTE_PATHS.ADMIN_DASHBOARD} replace />;
  }

  return <Navigate to={ROUTE_PATHS.HOME} replace />;
};

export default PublicRoute;
