import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useContext(UserContext);
  return user ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
