import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

export default function AdminRoute({ children }) {
  const { user,loading } = useContext(AuthContext);
 if (loading) return <p className="text-center mt-20">Loading...</p>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children; 
}
