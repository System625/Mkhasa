import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/utils/useAuth";

export const Component = () => {
  const { user } = useAuth();
  // return !user ? <Outlet /> : <Navigate to="/" />;
  return <Outlet />;
};
