import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function useGetFetch<T>(entity: string) {
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
    const fetchData = async () => {
      setLoading(true);
      setData(null);
      try {
        const response = await axios.get(`${API_URL}/${entity}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [API_URL, entity, token]);

  return { data, loading, error };
}
export default useGetFetch;
