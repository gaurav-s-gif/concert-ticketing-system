import { useEffect, useState } from "react";
import type { Concert } from "../types/concert";
import { getAllConcerts } from "../services/concertService";

export function useConcerts() {
  const [concerts, setConcerts] = useState<Concert[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadConcerts() {
      try {
        const data = await getAllConcerts();
        setConcerts(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load concerts.");
      } finally {
        setLoading(false);
      }
    }

    loadConcerts();
  }, []);

  return {
    concerts,
    loading,
    error,
  };
}