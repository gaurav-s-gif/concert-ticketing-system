import { useEffect, useState } from "react";
import type { Seat } from "../types/seat";
import { getSeatsByConcert } from "../services/seatService";

export function useSeats(concertId: number) {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const data = await getSeatsByConcert(concertId);
        setSeats(data);
      } catch {
        setError("Unable to load seats.");
      } finally {
        setLoading(false);
      }
    };

    if (concertId) {
      fetchSeats();
    }
  }, [concertId]);

  return {
    seats,
    loading,
    error,
  };
}