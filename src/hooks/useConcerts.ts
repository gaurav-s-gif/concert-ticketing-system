import { useEffect, useState } from "react";
import { getAllConcerts } from "../services/concertService";
import type { Concert } from "../types/concert";

export function useConcerts() {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConcerts = async () => {
      try {
        const data = await getAllConcerts();
        setConcerts(data);
      } catch {
        setError("Unable to load concerts.");
      } finally {
        setLoading(false);
      }
    };

    fetchConcerts();
  }, []);

  return {
    concerts,
    loading,
    error,
  };
}