import { useContext } from "react";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";

import { UserContext } from "../contexts/UserContext";

const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
  const { user } = useContext(UserContext);

  if (!user)
    toast("Faça login para ter acesso aos módulos", {
      icon: "⚠️",
    });

  return user ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
