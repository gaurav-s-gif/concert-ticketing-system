import api from "./api";
import type { Seat } from "../types/seat";

export const getSeatsByConcert = async (
  concertId: number
): Promise<Seat[]> => {
  const response = await api.get(`/seats/concert/${concertId}`);
  return response.data;
};