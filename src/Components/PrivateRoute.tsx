import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = localStorage.getItem("login");
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={location.pathname} replace />;
  }
  
  return <>{children}</>; 
};

export default PrivateRoute;
