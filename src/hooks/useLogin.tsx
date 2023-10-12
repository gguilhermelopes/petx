import axios from "axios";
import { useContext, useState } from "react";
import * as jose from "jose";

import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export type IUser = {
  email: string;
  name: string;
};

const useLogin = () => {
  const { user, setUser, loading, setLoading } = useContext(UserContext);

  const [error, setError] = useState<string | null>(null);

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
      const { payload } = await jose.jwtVerify(token, JWT_SECRET);
      if (!payload) throw new Error("Usuário não encontrado.");

      const user = await axios.get(`${API_URL}/users/${payload.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!user) throw new Error("Usuário não encontrado.");

      window.localStorage.setItem("token", token);
      setUser(user.data);
      toast.success("Login feito com sucesso!");
      navigate("/consultas");
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, fetchUser };
};
export default useLogin;
