import { useEffect, useState } from "react";
import { getConcertById } from "../services/concertService";
import type { Concert } from "../types/concert";

export function useConcert(id: number) {
  const [concert, setConcert] = useState<Concert | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConcert = async () => {
      try {
        const data = await getConcertById(id);
        setConcert(data);
      } catch {
        setError("Unable to load concert.");
      } finally {
        setLoading(false);
      }
    };

    fetchConcert();
  }, [id]);

  return {
    concert,
    loading,
    error,
  };
}