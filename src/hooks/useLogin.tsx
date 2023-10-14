import { useContext, useState } from "react";
import axios from "axios";
import * as jose from "jose";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { UserContext } from "../contexts/UserContext";

export type IUser = {
  email: string;
  name: string;
};

const useLogin = () => {
  const { setUser, loading, setLoading } = useContext(UserContext);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const JWT_SECRET = new TextEncoder().encode(import.meta.env.VITE_JWT_SECRET);

  const fetchUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      const token = response.data.token;

      const user = await getUser(token);
      setUser(user);
      setError(null);
      window.localStorage.setItem("token", token);

      toast.success(`Seja bem-vindo(a), ${user?.name.split(" ")[0]}`);
      navigate("/consultas");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async (token: string) => {
    try {
      setLoading(true);
      const { payload } = await jose.jwtVerify(token, JWT_SECRET);
      if (!payload) throw new Error("Usuário não encontrado.");

      const user = await axios.post<IUser>(`${API_URL}/users`, payload.sub, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "text/plain",
        },
      });
      if (!user) throw new Error("Usuário não encontrado.");

      setError(null);
      return user.data;
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const autoLogin = async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setLoading(true);
      try {
        const user = await getUser(token);
        setUser(user);
        navigate("/consultas");
        toast.success(`Bom ter você de volta, ${user?.name.split(" ")[0]}`);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    }
  };

  return {
    loading,
    error,
    fetchUser,
    autoLogin,
    isLoggedIn,
    setIsLoggedIn,
  };
};
export default useLogin;
