import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const login = null;
  return login ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
