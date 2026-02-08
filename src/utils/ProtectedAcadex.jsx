// ProtectedAcadex.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedAcadex = () => {
  const isLoggedIn = localStorage.getItem("login") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />; 
};

export default ProtectedAcadex;
