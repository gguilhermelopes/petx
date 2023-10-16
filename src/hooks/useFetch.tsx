import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useFetch<T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  entity: string,
  options?: AxiosRequestConfig<RequestInit>
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/");
  }, [navigate, token]);

  useEffect(() => {
    const axiosFetch = () => {
      const optionsAxios = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        ...options,
      };
      switch (method) {
        case "GET":
          return axios.get(`${API_URL}/${entity}`, optionsAxios);
        case "POST":
          return axios.post(`${API_URL}/${entity}`, optionsAxios);
        case "PUT":
          return axios.put(`${API_URL}/${entity}`, optionsAxios);
        case "DELETE":
          return axios.delete(`${API_URL}/${entity}`, optionsAxios);
        default:
          throw new Error("Método de requisição inválido");
      }
    };

    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await axiosFetch();
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL, entity, method, options, token]);

  return { data, loading, error };
}
export default useFetch;
